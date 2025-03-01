document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("div[id]"); 
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function changeActiveSection() {
        let currentSection = "";

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 150; 
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveSection);
});

window.addEventListener("resize", ()=>{
    console.log(window.innerWidth);
})