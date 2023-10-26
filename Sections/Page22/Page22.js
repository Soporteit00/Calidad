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





//Funciones para avanzar 

const icon = document.getElementById("icon");
const avanzarBtn = document.getElementById("avanzarBtn");

icon.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

icon.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});