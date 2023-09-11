/*jslint devel: true */
/*eslint-env browser*/

function cambioIdioma(clase) {
    "use strict";
    var idioma = document.getElementById("languages").children;
    var i;
    for (i = 0; i < idioma.length; i += 1) {
        if (idioma[i].className.match(clase)) {
            idioma[i].style.display = "block";
        } else {
            idioma[i].style.display = "none";
        }
    }
}

function espaniol() {
    "use strict";
    cambioIdioma("esp");
}

function ingles() {
    "use strict";
    cambioIdioma("eng");
}
