const audio = document.getElementById("audio");

function reproducirAudio() {
  audio.play();
}

function pausarAudio() {
  audio.pause();
}

const audio2 = document.getElementById("audio2");

function reproducirAudio2() {
  audio2.play();
}

function pausarAudio2() {
  audio2.pause();
}

const audio3 = document.getElementById("audio3");

function reproducirAudio3() {
  audio3.play();
}

function pausarAudio3() {
  audio3.pause();
}

function pausarAudio3() {
  audio3.pause();
}

const audio4 = document.getElementById("audio4");

function reproducirAudio4() {
  audio4.play();
}

function pausarAudio4() {
  audio4.pause();
}

const audio5 = document.getElementById("audio5");

function reproducirAudio5() {
  audio5.play();
}

function pausarAudio5() {
  audio5.pause();
}

const audio6 = document.getElementById("audio6");

function reproducirAudio6() {
  audio6.play();
}

//Funciones para avanzar 

const icon = document.getElementById("icon");
const avanzarBtn = document.getElementById("avanzarBtn");

icon.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

icon.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});