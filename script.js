document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC EXPERIENCE COUNTER LOGIC
    const experienceElement = document.getElementById("experience");
    
    if (experienceElement) {
        const startDate = new Date(2019, 09 , 7);
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

        experienceElement.innerHTML = 
            years + " Years " + 
            months + " Months " + 
            days + " Days";
    }

    // 2. SCROLL HIGHLIGHT / ACTIVE MENU LOGIC
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    const observerOptions = {
        root: null,
        rootMargin: "-30% 0px -60% 0px", // Triggers the highlight when a section hits the middle of your screen
        threshold: 0
    };

    const observer = new Intersection Observer((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navLinks.forEach((link) => {
                    const href = link.getAttribute("href");
                    
                    // Checks if the link href matches the section ID exactly
                    if (href === `#${id}`) {
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
