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

const audio4 = document.getElementById("audio4");

function reproducirAudio4() {
  audio4.play();
}

function pausarAudio4() {
  audio4.pause();
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

function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}

function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}