
let popupElement = document.getElementById("popup");
let button = document.getElementById("feedback");
let closebtn = document.querySelector(".close");

button.onclick = () => {
    popupElement.style.display = "block";     
    popupElement.style.display = "fadeIn"
}

closebtn.addEventListener('click', () => {
    popupElement.style.display = "none";  
});
