function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
input.classList.add("numbers");
const createBtn = document.querySelector('button[data-create]');
createBtn.classList.add("create-btn");
const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.classList.add("destroy-btn");
const bigBox = document.querySelector("#boxes")


createBtn.addEventListener("click", create);

function create() {
 
  const amount = input.value;
  if (amount < 0 || amount > 100){
    bigBox.innerHTML = '';
    alert("Error");
    
    return;
  } 
  createBoxes(amount);
  
}

function createBoxes(amount){
  bigBox.innerHTML = '';
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i++) {
    
    const newElem = document.createElement("div");
    newElem.style.width = `${width}px`;
    newElem.style.height = `${height}px`;
    newElem.style.backgroundColor = getRandomHexColor();
    bigBox.append(newElem);
    width+=10;
    height+=10;
    
    
  }
  input.value = "";
  
}


destroyBtn.addEventListener("click", (destroy))
function destroy() {
  bigBox.innerHTML = '';
}
  




  
