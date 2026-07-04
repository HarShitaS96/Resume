console.log("script loaded");
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC EXPERIENCE COUNTER LOGIC
    // Using an absolute string literal locks down the correct start window calculations cleanly
    const startDate = new Date("2019-10-14"); 
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Targets the display value inside your hero journey element block smoothly
    const experienceTextElement = document.querySelector(".journey-card h2");
    if (experienceTextElement) {
        experienceTextElement.innerHTML = 
            years + " Years " + 
            months + " Months " + 
            days + " Days";
    }

    // 2. SCROLL HIGHLIGHT / ACTIVE MENU LOGIC
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -45% 0px", // Perfect triggering window for both standard monitors and smartphones
        threshold: 0.1
    };

    const observer = new Intersection Observer((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                
                navLinks.forEach((link) => {
                    const href = link.getAttribute("href").replace("#", "");
                    
                    if (href === currentId) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});
