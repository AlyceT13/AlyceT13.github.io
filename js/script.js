/* jslint devel: true */
/*eslint-env browser*/

function animar() {
    "use strict";
    document.getElementById("icono").classList.toggle("cambiar");
}

function openMenu() {
    "use strict";
    animar();
    document.getElementById("menu").style.display = "block";
}

function closeMenu() {
    "use strict";
    animar();
    document.getElementById("menu").style.display = "none";
}

function menu() {
    "use strict";
    if (document.getElementById("menu").style.display === "block") {
        closeMenu();
    } else {
        openMenu();
    }
}

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
