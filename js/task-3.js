const formInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output")



formInput.addEventListener("input", (event) => {
    event.preventDefault();
    let value = event.currentTarget.value.trim();
    if (value === ""){
        userName.textContent = "Anonymous";
        return}  
    userName.textContent = value
    
   
})

