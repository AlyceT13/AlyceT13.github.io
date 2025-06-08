/*jslint devel: true */
/*eslint-env browser*/

const translations = {
  es: {
    "contact-title": "INFORMACIÓN DE CONTACTO:",
    "home-description": "Soy una estudiante acabando mi cuarto año del grado en Diseño y desarrollo de videojuegos en",
    "home-title": "INICIO",
    "skills-title": "CONOCIMIENTOS Y TRABAJOS",
    "contact-title": "CONTACTO",
  },
  en: {
    "contact-title": "CONTACT INFORMATION:",
    "home-description": "I am a third-year student in the degree of Video Game Design and Development...",
    "home-title": "HOME",
    "skills-title": "SKILLS AND PROJECTS",
    "contact-title": "CONTACT",
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function espaniol() {
  changeLanguage("es");
}

function ingles() {
  changeLanguage("en");
}