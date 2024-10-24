function toggleMenu() {
    var menuIcon = document.querySelector(".menu-icon");
    var navList = document.getElementById("nav-list");

    menuIcon.classList.toggle("change");
    navList.classList.toggle("active");
}

// Função para fechar o menu ao clicar em um link
var navLinks = document.querySelectorAll('#nav-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        var menuIcon = document.querySelector(".menu-icon");
        var navList = document.getElementById("nav-list");

        // Fechar o menu
        menuIcon.classList.remove("change");
        navList.classList.remove("active");
    });
});
