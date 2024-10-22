const story = document.body.querySelector(".story");
const setText = document.body.querySelector("#set-text");
setText.addEventListener("click" , () => {
    story.textContent = "It was a dark and storymy night............."
});


const clearText = document.body.querySelector("#clear-text");
clear-Text.addEventListener("click" , () => {
    story.textContent = "";
});