/*
  DADOS DE CONTATO — os números/e-mails NÃO são exibidos no site.
  Eles aparecem apenas como destinos dos botões/ícones.

  IMPORTANTE:
  Para o WhatsApp, o formato internacional usado pelo wa.me não leva o
  "0" de tronco antes do DDD. Assim, o número informado foi convertido
  de +55061983191985 para 5561983191985 para gerar um link funcional.
*/

const CONFIG = {
  whatsapp: "5561983191985",
  instagram: "https://www.instagram.com/fisiogabrielfigueiredo/",
  email: "mailto:fisiogabrielfigueiredo@gmail.com"
};

const whatsappMessage = encodeURIComponent(
  "Olá, Gabriel! Vi seu site e gostaria de saber mais sobre a fisioterapia online e os horários disponíveis."
);
const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${whatsappMessage}`;

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-instagram]").forEach(link => {
  link.href = CONFIG.instagram;
});

document.querySelectorAll("[data-email]").forEach(link => {
  link.href = CONFIG.email;
});

// Menu mobile
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
