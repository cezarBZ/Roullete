const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const btn = document.querySelector(".btn");

function playOnClick() {
    globalObjects = {
        btnPlay: document.getElementById("btnPlay"),
        roulette: document.getElementById("roulette"),
        arrow: document.getElementById("arrow")
    }
    globalObjects.btnPlay.style.visibility = "hidden";
    globalObjects.arrow.style.animation = "arrowAnimation .45s linear infinite";
    globalObjects.roulette.style.animation = "roulette 1s linear infinite";
    setTimeout(() => {
        stopRoulette()
    }, 2180);
    return
}

function stopRoulette() {
    globalObjects.roulette.style["animation-play-state"] = "paused";
    globalObjects.arrow.style.animation = "";
    setTimeout(() => {
        toggleModal()
    }, 1000);
}

const toggleModal = () => {
    modal.classList.remove("hide")
    fade.classList.remove("hide")
    modal.classList.add("show");
    fade.classList.add("show");
};

function redirect() {
    setTimeout(() => {
        window.location.replace("https://www.instagram.com/brbet.365/");
    }, 1000);
}