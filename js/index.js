// #1: MouseOver on the nav links
document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "red";

    setTimeout(() => {
        element.style.backgroundColor = "";
    }, 200)
    }, false);
});

// #2  Keydown 
window.addEventListener("keydown", () => {
    const downText = document.querySelector(".logo-heading");
    downText.style.color = "blue";
    downText.textContent = "Why are eggs not very much into jokes? Because they could crack up!"
});