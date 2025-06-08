document.addEventListener("DOMContentLoaded", () => {
  const text = "I'M ALICIA TOURIS MARTÍN";
  const target = document.getElementById("name");
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeChar, 70);
    }
  }

  typeChar();
});
