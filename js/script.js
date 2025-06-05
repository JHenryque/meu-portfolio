// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfólio carregado com sucesso!");

  // ------------------------- variaveis ---
  const btn_menu = document.querySelector(".hamburguer");
  const menu = document.querySelector(".menu-mobile");
  const btn_close = document.querySelector(".menu-close");
  const btn_enviar = document.querySelector("#enviar");
  const inputEmail = document.querySelector("#email");
  const inputMensagem = document.querySelector("#mensagem");
  const camposObrigatorio = document.querySelector(".tdCampo_obr");
  const boxProjetos = document.getElementById("list-projetos");
  const cardProjetos = document.querySelectorAll(".list-projeto");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  // ------------------------- menu hamburguer ---
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

  // ------------------------- enviando mensagem valdiadar formulario ---
  btn_enviar.addEventListener("click", () => {
    if (!inputEmail.value || !inputMensagem.value) {
      camposObrigatorio.innerHTML = "Preencha todos Campos é Obrigatorio *";
      camposObrigatorio.classList.add("cor_obr");
      inputEmail.style.border = "2px solid #f54343";
      inputMensagem.style.border = "2px solid #f54343";

      if (inputEmail.value) {
        inputEmail.style.border = "2px solid rgb(54, 153, 50)";
        return;
      }
      if (inputEmail.value) {
        inputMensagem.style.border = "2px solid rgb(54, 153, 50)";
        return;
      }
      return;
    } else {
      inputEmail.innerHTML = "";
      inputMensagem.innerHTML = "";
      inputEmail.style.border = "0";
      inputMensagem.style.border = "0";
      camposObrigatorio.innerHTML = "Mensagem Enviada com sucesso ";
      camposObrigatorio.classList.remove("cor_obr");
      camposObrigatorio.classList.add("com_sucesso");
    }
  });

  // ------------------------- header scroll ---

  const btnTop = document.querySelector(".subir-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 750) {
      btnTop.classList.add("active-scroll");
    } else {
      btnTop.classList.remove("active-scroll");
    }
  });

  // ------------------------- scroll top ---
  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ------------------------- calculando todos os card arrow  ---

  let cardWidth;
  cardProjetos.forEach((card) => {
    let widthValue = card.offsetWidth;

    cardWidth = widthValue + 24;
  });

  let qtdCard = cardProjetos.length * cardWidth;

  // ------------------------- arrow scroll left ---
  leftArrow.addEventListener("click", () => {
    boxProjetos.scrollLeft -= cardWidth;

    if (boxProjetos.scrollLeft <= 0) {
      boxProjetos.scrollLeft = qtdCard;
      return;
    }

    if (window.innerWidth <= 1626) {
      boxProjetos.scrollLeft -= cardWidth - cardWidth;
      return;
    }

    if (window.innerWidth <= 768) {
      boxProjetos.scrollLeft -= cardWidth - cardWidth;
      return;
    }
  });

  // ------------------------ arrow scroll right ---
  rightArrow.addEventListener("click", () => {
    boxProjetos.scrollLeft += cardWidth;
    let scrollLeft = boxProjetos.scrollLeft;
    console.log(scrollLeft);
    if (
      scrollLeft + cardWidth >= qtdCard - (cardWidth - 2) &&
      window.innerWidth > 768
    ) {
      boxProjetos.scrollLeft = 0;
      return;
    }

    if (window.innerWidth <= 1626 && window.innerWidth > 768) {
      boxProjetos.scrollLeft += cardWidth - cardWidth;
      return;
    }

    if (window.innerWidth <= 768) {
      if (scrollLeft + cardWidth >= qtdCard) {
        boxProjetos.scrollLeft = 0;
        return;
      } else {
        boxProjetos.scrollLeft += cardWidth - cardWidth;
      }

      return;
    }
  });
});
