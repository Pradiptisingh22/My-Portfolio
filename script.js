
  document.addEventListener("DOMContentLoaded", function () {
    // Typing animation
    const typed = new Typed("#typed", {
      strings: [
        "Crafting seamless UI test automation with Selenium & Cucumber",
        "Validating robust APIs using RestAssured & Postman",
        "Optimizing pipelines with Jenkins, Docker & AWS"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    // Toggle mobile menu
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

