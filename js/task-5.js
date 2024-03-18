function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const change = document.querySelector(".change-color");
const color = document.querySelector("body");
const textColor =document.querySelector(".color");

change.addEventListener("click", handleClick);

function handleClick(event){
  event.preventDefault();
  const random = getRandomHexColor();
  textColor.textContent = random;
  color.style.backgroundColor = random;

}