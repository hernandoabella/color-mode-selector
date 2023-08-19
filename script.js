function changeColor(colorNumber) {
  const colors = document.querySelectorAll(".color");
  const selectedColor = colors[colorNumber - 1].style.backgroundColor;
  document.body.style.backgroundColor = selectedColor;
}
