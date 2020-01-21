// #1: Mouseover Event
document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "lightblue";

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

// #5 DblClick Event
const funBus = document.querySelector(".intro h2");

funBus.addEventListener("dblclick", () => {
    funBus.textContent = "Big fun, tiny bus!"
});

// #6 Resize Event
const resizeImg = document.querySelector("img");

window.addEventListener('resize', () => {
    resizeImg.src = "./img/pineapple.jpg";
});

// #7 Mouseover Event
document.querySelectorAll(".text-content").forEach(mouseOver => {
    mouseOver.addEventListener("mouseover", ()=> {
        mouseOver.style.backgroundColor = "grey";
    })
})

// #8 Click Event
const btnPush = document.querySelector('.btn')
    btnPush.addEventListener("click", () => {
        alert("Enjoy Your Trip!");
    })
