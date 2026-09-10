// Inicia a animação de rotação contínua utilizando GSAP
const spinningAnimation = TweenMax.to("#img", 10, {
    rotation: 360,
    ease: Linear.easeNone,
    repeat: -1
});

// Controles interativos de velocidade e pausa
const btnPause = document.getElementById("btn-pause");
const btnSlow = document.getElementById("btn-slow");
const btnNormal = document.getElementById("btn-normal");
const btnFast = document.getElementById("btn-fast");

if (btnPause) {
    btnPause.addEventListener("click", function () {
        if (spinningAnimation.paused()) {
            spinningAnimation.play();
            this.textContent = "⏸️ Pausar";
        } else {
            spinningAnimation.pause();
            this.textContent = "▶️ Retomar";
        }
    });
}

if (btnSlow) {
    btnSlow.addEventListener("click", () => spinningAnimation.timeScale(0.5));
}

if (btnNormal) {
    btnNormal.addEventListener("click", () => spinningAnimation.timeScale(1));
}

if (btnFast) {
    btnFast.addEventListener("click", () => spinningAnimation.timeScale(3));
}