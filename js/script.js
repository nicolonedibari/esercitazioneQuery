
let elements = document.querySelectorAll(".myElement")

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(event) {
        event.currentTarget.classList.remove("greenBg")
        event.currentTarget.classList.add("transition")
        event.currentTarget.classList.add("yellowBg")
    });
}