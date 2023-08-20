// Obtener todos los elementos de clase "color"
const colorDivs = document.querySelectorAll(".color");

// Iterar a través de cada div de color y agregar un evento de clic
colorDivs.forEach((colorDiv) => {
  colorDiv.addEventListener("click", () => {
    // Obtener el color de fondo del div clicado
    const backgroundColor = window.getComputedStyle(colorDiv).backgroundColor;
    
    // Cambiar el color de fondo del cuerpo del documento
    document.body.style.backgroundColor = backgroundColor;
  });
});
