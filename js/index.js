// #1: Mouseover Event
document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "red";

    setTimeout(() => {
        element.style.backgroundColor = "";
    }, 200)
    }, false);
});

// #2  Keydown Event
window.addEventListener("keydown", () => {
    const downText = document.querySelector(".logo-heading");
    downText.style.color = "blue";
    downText.textContent = "Why are eggs not very much into jokes? Because they could crack up!"
});

// #3 Mouseenter Event
const busImg = document.querySelector(".intro img");

busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = "scale(1.5)";
    busImg.style.transition = "all 0.3s";
})

// #4 Mouseleave Event
busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = "scale(1)";
})