// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfólio carregado com sucesso!");

  const btn_menu = document.querySelector(".hamburguer");
  const menu = document.querySelector(".menu-mobile");
  const btn_close = document.querySelector(".menu-close");
  const btn_enviar = document.querySelector("#enviar");

  btn_menu.addEventListener("click", () => {
    menu.classList.add("active");
    btn_menu.classList.remove("active_bars");
    btn_close.classList.add("active_bars");
  });

  btn_close.addEventListener("click", () => {
    menu.classList.remove("active");
    btn_menu.classList.add("active_bars");
    btn_close.classList.remove("active_bars");
  });

  btn_enviar.addEventListener("click", () => {
    alert("Portfólio carregado com sucesso!");
  });
});
