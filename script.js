document.addEventListener("DOMContentLoaded", function () {

    const startDate = new Date(2019,9,7);
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("experience-counter").textContent =
        `${years} Years ${months} Months ${days} Days`;

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                navLinks.forEach(function(link) {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + id
                    );
                });
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(function(section) {
        observer.observe(section);
    });

});
