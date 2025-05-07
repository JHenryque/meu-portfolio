// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfólio carregado com sucesso!");

  const btn_menu = document.querySelector(".hamburguer");
  const menu = document.querySelector(".menu-mobile");
  const btn_close = document.querySelector(".menu-close");
  const btn_enviar = document.querySelector("#enviar");
  const inputEmail = document.querySelector("#email");
  const inputMensagem = document.querySelector("#mensagem");
  const camposObrigatorio = document.querySelector(".tdCampo_obr");

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

  const btnTop = document.querySelector(".subir-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 750) {
      btnTop.classList.add("active-scroll");
    } else {
      btnTop.classList.remove("active-scroll");
    }
  });
  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
