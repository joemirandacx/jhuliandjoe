document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       TEXTO ESCRITO
    ====================================== */

    const typewriter = document.getElementById("typewriter");

    const message =
        "Jhuliana, esta pequeña página nació por una razón muy sencilla: " +
        "quería crear algo solamente para ti. ❤️";

    let index = 0;

    function writeText() {

        if (index < message.length) {

            typewriter.textContent += message.charAt(index);

            index++;

            const delay = message.charAt(index) === " "
                ? 45
                : 60;

            setTimeout(writeText, delay);
        }
    }

    setTimeout(writeText, 1500);



    /* =====================================
       PARTÍCULAS DEL FONDO
    ====================================== */

    const particlesContainer =
        document.getElementById("particles");

    function createParticles() {

        for (let i = 0; i < 70; i++) {

            const particle =
                document.createElement("div");

            particle.classList.add("particle");

            particle.style.left =
                `${Math.random() * 100}vw`;

            particle.style.top =
                `${Math.random() * 100}vh`;

            particle.style.setProperty(
                "--duration",
                `${2 + Math.random() * 5}s`
            );

            particle.style.animationDelay =
                `${Math.random() * 5}s`;

            const size =
                Math.random() * 2.5 + 1;

            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;

            particlesContainer.appendChild(particle);
        }
    }

    createParticles();



    /* =====================================
       CORAZONES QUE SUBEN
    ====================================== */

    const heartsContainer =
        document.getElementById("floating-hearts");

    function createFloatingHeart() {

        const heart =
            document.createElement("div");

        heart.classList.add("floating-heart");

        const heartOptions = [
            "❤",
            "♥",
            "♡"
        ];

        heart.textContent =
            heartOptions[
                Math.floor(
                    Math.random() *
                    heartOptions.length
                )
            ];

        heart.style.left =
            `${Math.random() * 100}vw`;

        heart.style.fontSize =
            `${12 + Math.random() * 18}px`;

        const duration =
            7 + Math.random() * 7;

        heart.style.animationDuration =
            `${duration}s`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    setInterval(createFloatingHeart, 900);



    /* =====================================
       ANIMACIÓN AL HACER SCROLL
    ====================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });



    /* =====================================
       ABRIR CARTA
    ====================================== */

    const openLetterButton =
        document.getElementById(
            "openLetterButton"
        );

    const letterSection =
        document.getElementById(
            "letterSection"
        );

    openLetterButton.addEventListener(
        "click",
        () => {

            letterSection.classList.add(
                "visible"
            );

            setTimeout(() => {

                letterSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

            createHeartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2,
                20
            );
        }
    );



    /* =====================================
       MODAL SORPRESA
    ====================================== */

    const surpriseButton =
        document.getElementById(
            "surpriseButton"
        );

    const surpriseModal =
        document.getElementById(
            "surpriseModal"
        );

    const closeModal =
        document.getElementById(
            "closeModal"
        );

    surpriseButton.addEventListener(
        "click",
        () => {

            surpriseModal.classList.add(
                "visible"
            );

            createHeartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2,
                35
            );
        }
    );

    closeModal.addEventListener(
        "click",
        () => {

            surpriseModal.classList.remove(
                "visible"
            );
        }
    );

    surpriseModal.addEventListener(
        "click",
        (event) => {

            if (event.target === surpriseModal) {

                surpriseModal.classList.remove(
                    "visible"
                );

            }

        }
    );



    /* =====================================
       BOTÓN FINAL
    ====================================== */

    const loveExplosionButton =
        document.getElementById(
            "loveExplosionButton"
        );

    const finalMessage =
        document.getElementById(
            "finalMessage"
        );

    loveExplosionButton.addEventListener(
        "click",
        (event) => {

            finalMessage.classList.add(
                "visible"
            );

            const rect =
                event.target.getBoundingClientRect();

            const centerX =
                rect.left +
                rect.width / 2;

            const centerY =
                rect.top +
                rect.height / 2;

            createHeartExplosion(
                centerX,
                centerY,
                60
            );

            loveExplosionButton.textContent =
                "Te quiero ❤️";
        }
    );



    /* =====================================
       EXPLOSIÓN DE CORAZONES
    ====================================== */

    function createHeartExplosion(
        x,
        y,
        amount
    ) {

        for (
            let i = 0;
            i < amount;
            i++
        ) {

            const heart =
                document.createElement("div");

            heart.classList.add(
                "explosion-heart"
            );

            heart.textContent =
                Math.random() > 0.3
                    ? "❤️"
                    : "🌸";

            heart.style.left =
                `${x}px`;

            heart.style.top =
                `${y}px`;

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                100 +
                Math.random() *
                350;

            const moveX =
                Math.cos(angle) *
                distance;

            const moveY =
                Math.sin(angle) *
                distance;

            heart.style.setProperty(
                "--x",
                `${moveX}px`
            );

            heart.style.setProperty(
                "--y",
                `${moveY}px`
            );

            heart.style.setProperty(
                "--rotation",
                `${Math.random() * 720 - 360}deg`
            );

            document.body.appendChild(
                heart
            );

            setTimeout(() => {
                heart.remove();
            }, 1600);
        }
    }



    /* =====================================
       CORAZÓN AL HACER CLICK
    ====================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (
                event.target.tagName ===
                "BUTTON"
            ) {
                return;
            }

            const heart =
                document.createElement(
                    "div"
                );

            heart.textContent =
                "♡";

            heart.style.position =
                "fixed";

            heart.style.left =
                `${event.clientX}px`;

            heart.style.top =
                `${event.clientY}px`;

            heart.style.fontSize =
                "20px";

            heart.style.color =
                "#ff7ca2";

            heart.style.pointerEvents =
                "none";

            heart.style.zIndex =
                "999";

            heart.style.transition =
                "all 1s ease";

            document.body.appendChild(
                heart
            );

            requestAnimationFrame(() => {

                heart.style.transform =
                    "translateY(-80px) scale(1.8)";

                heart.style.opacity =
                    "0";

            });

            setTimeout(() => {
                heart.remove();
            }, 1000);
        }
    );

});


/* =====================================
   MÚSICA DE FONDO - YOUTUBE
===================================== */

// Pon aquí SOLO el ID del vídeo
const YOUTUBE_VIDEO_ID = "EYtOWu2XpDs";

let youtubePlayer = null;
let youtubeReady = false;
let musicStarted = false;


/*
 * YouTube llama automáticamente esta función
 * cuando termina de cargar la API.
 */
window.onYouTubeIframeAPIReady = function () {

    console.log("✅ API de YouTube cargada");

    youtubePlayer = new YT.Player(
        "youtube-player",
        {
            width: "300",
            height: "200",

            videoId: YOUTUBE_VIDEO_ID,

            playerVars: {
                autoplay: 0,
                controls: 0,

                loop: 1,
                playlist: YOUTUBE_VIDEO_ID,

                playsinline: 1,
                rel: 0
            },

            events: {

                onReady: function (event) {

                    console.log("✅ Reproductor de YouTube preparado");

                    youtubeReady = true;

                    event.target.setVolume(100);

                    /*
                     * Intentamos reproducir automáticamente.
                     *
                     * Chrome probablemente bloqueará esto,
                     * pero no pasa nada porque tenemos
                     * el fallback del primer clic.
                     */
                    event.target.playVideo();
                },


                onStateChange: function (event) {

                    const states = {
                        "-1": "NO INICIADO",
                        "0": "FINALIZADO",
                        "1": "REPRODUCIENDO",
                        "2": "PAUSADO",
                        "3": "CARGANDO",
                        "5": "VIDEO PREPARADO"
                    };

                    console.log(
                        "🎵 Estado YouTube:",
                        states[event.data] ?? event.data
                    );


                    if (
                        event.data ===
                        YT.PlayerState.PLAYING
                    ) {

                        console.log(
                            "❤️ LA MÚSICA ESTÁ REPRODUCIÉNDOSE"
                        );

                        musicStarted = true;
                    }


                    /*
                     * Seguridad adicional para el loop
                     */
                    if (
                        event.data ===
                        YT.PlayerState.ENDED
                    ) {

                        console.log(
                            "🔁 Reiniciando canción"
                        );

                        youtubePlayer.seekTo(0);

                        youtubePlayer.playVideo();
                    }

                },


                onError: function (event) {

                    console.error(
                        "❌ ERROR DE YOUTUBE:",
                        event.data
                    );

                    switch (event.data) {

                        case 2:
                            console.error(
                                "ID del vídeo incorrecto."
                            );
                            break;

                        case 5:
                            console.error(
                                "El vídeo no puede reproducirse en HTML5."
                            );
                            break;

                        case 100:
                            console.error(
                                "El vídeo no existe o fue eliminado."
                            );
                            break;

                        case 101:
                        case 150:
                            console.error(
                                "El propietario del vídeo no permite reproducirlo fuera de YouTube."
                            );
                            break;
                    }

                }
            }
        }
    );
};


/*
 * Primer clic en cualquier lugar de la página.
 *
 * No necesitas ningún botón.
 */
document.addEventListener(
    "click",
    function () {

        console.log("🖱️ Clic detectado");

        if (!youtubeReady) {

            console.log(
                "⏳ YouTube todavía no está preparado"
            );

            return;
        }


        if (!musicStarted) {

            console.log(
                "🎵 Intentando iniciar música..."
            );

            youtubePlayer.unMute();

            youtubePlayer.setVolume(40);

            youtubePlayer.playVideo();

        }

    }
);