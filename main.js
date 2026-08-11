const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});



const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        // Hide ALL sections
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Show ONLY the clicked section
        if (targetSection) {
            targetSection.style.display = "block";
        }

        // Close menu
        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");

        // Go to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});