const colorItems = document.querySelectorAll(".color");
const inputColor = document.querySelector("input[name = 'color']")
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

window.onload = function(){
  document.body.style.backgroundColor = localStorage.getItem("bg-color")??"teal"
}

colorItems.forEach((colors) => {
  let color = generateColors();
  colors.style.backgroundColor = color;
  colors.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
    removeSelectedColor();
    colors.classList.add("selected-color");
    localStorage.setItem("bg-color", color)
  });
});

function removeSelectedColor() {
  colorItems.forEach((color) => {
    color.classList.remove("selected-color");
  });
}

function generateColors() {
  let color = "";
  for (let i = 0; i <= 5; i++) {
    let randIndex = parseInt(Math.random() * hexColors.length);
    color += hexColors[randIndex];
  }
  return "#" + color;
}

inputColor.addEventListener("change",()=>{
  document.body.style.backgroundColor= inputColor.value
  localStorage.setItem("bg-color",inputColor.value)
})