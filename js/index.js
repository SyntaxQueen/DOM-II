// #1: MouseOver on the nav links
document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "red";

    setTimeout(() => {
        element.style.backgroundColor = "";
    }, 200)
    }, false);
});

// #2 