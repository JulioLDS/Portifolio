// MENU HAMBURGUER 

const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menuHamburguer");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburguer.classList.toggle("active");
});

