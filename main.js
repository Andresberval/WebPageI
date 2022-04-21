document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.card-banners-one', {delay: 600});
ScrollReveal().reveal('.info-cards', {delay: 600});
