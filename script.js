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
        // Adjusted margins to trigger exactly when the heading/content hits the top 40% of the viewport
        rootMargin: "-20% 0px -50% 0px", 
        threshold: 0.1
    };

    const observer = new Intersection Observer((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                
                // Debug tool: Right-click page -> Inspect -> Console to see this running live!
                console.log("Currently reading section:", currentId);
                
                navLinks.forEach((link) => {
                    const href = link.getAttribute("href").replace("#", "");
                    
                    // Smart match check: matches exact ID or handles variations like "experience-section" vs "experience"
                    if (href === currentId || 
                        (currentId === "experience-section" && href === "experience") ||
                        (currentId === "experience" && href === "experience-section") ||
                        (currentId === "home" && href === "") ) {
                        
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
