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

/*
 * Canción:
 * https://www.youtube.com/watch?v=hd6KIk2ijpE
 */
const YOUTUBE_VIDEO_ID = "hd6KIk2ijpE";

/*
 * Volumen entre 0 y 100.
 */
const MUSIC_VOLUME = 100;

let youtubePlayer = null;

let youtubeReady = false;

/*
 * IMPORTANTE:
 *
 * Esto indica si YA hemos conseguido
 * activar el SONIDO.
 *
 * No es lo mismo que simplemente
 * reproducir el vídeo silenciado.
 */
let soundActivated = false;



/* =====================================
   API DE YOUTUBE PREPARADA
===================================== */

window.onYouTubeIframeAPIReady = function () {

    console.log(
        "✅ API de YouTube cargada"
    );

    youtubePlayer = new YT.Player(
        "youtube-player",
        {

            width: 200,

            height: 200,

            videoId: YOUTUBE_VIDEO_ID,

            playerVars: {

                /*
                 * Intentamos comenzar automáticamente.
                 *
                 * Como inicialmente estará silenciado,
                 * Chrome suele permitirlo.
                 */
                autoplay: 1,


                /*
                 * Sin controles visuales.
                 */
                controls: 0,


                /*
                 * Repetición infinita.
                 *
                 * YouTube necesita playlist con el mismo
                 * ID para repetir un único vídeo.
                 */
                loop: 1,

                playlist: YOUTUBE_VIDEO_ID,


                /*
                 * Mejor comportamiento en móviles.
                 */
                playsinline: 1,


                /*
                 * No mostrar vídeos relacionados
                 * de otros canales.
                 */
                rel: 0,


                /*
                 * Dominio desde el que se está ejecutando.
                 *
                 * En GitHub Pages será algo parecido a:
                 *
                 * https://usuario.github.io
                 */
                origin: window.location.origin
            },

            events: {


                /* =====================================
                   REPRODUCTOR PREPARADO
                ====================================== */

                onReady: function (event) {

                    console.log(
                        "✅ Reproductor de YouTube preparado"
                    );

                    youtubeReady = true;


                    /*
                     * Configuramos el volumen desde
                     * el principio.
                     */
                    event.target.setVolume(
                        MUSIC_VOLUME
                    );


                    /*
                     * Primero iniciamos SILENCIADO.
                     *
                     * Los navegadores normalmente permiten
                     * autoplay silenciado.
                     */
                    event.target.mute();


                    /*
                     * Iniciar reproducción.
                     */
                    event.target.playVideo();


                    console.log(
                        "🔇 Música iniciada silenciada"
                    );

                    console.log(
                        "👉 El primer clic activará el sonido"
                    );
                },



                /* =====================================
                   CAMBIO DE ESTADO
                ====================================== */

                onStateChange: function (event) {

                    const states = {

                        "-1":
                            "NO INICIADO",

                        "0":
                            "FINALIZADO",

                        "1":
                            "REPRODUCIENDO",

                        "2":
                            "PAUSADO",

                        "3":
                            "CARGANDO",

                        "5":
                            "VIDEO PREPARADO"
                    };


                    console.log(
                        "🎵 Estado YouTube:",
                        states[event.data] ??
                        event.data
                    );


                    /*
                     * Si termina por algún motivo,
                     * lo reiniciamos manualmente.
                     *
                     * Es una seguridad adicional al
                     * loop configurado anteriormente.
                     */
                    if (
                        event.data ===
                        YT.PlayerState.ENDED
                    ) {

                        console.log(
                            "🔁 Reiniciando canción"
                        );

                        event.target.seekTo(
                            0,
                            true
                        );

                        event.target.playVideo();
                    }
                },



                /* =====================================
                   AUTOPLAY BLOQUEADO
                ====================================== */

                onAutoplayBlocked: function () {

                    console.warn(
                        "⚠️ El navegador bloqueó " +
                        "el autoplay."
                    );

                    console.warn(
                        "👉 La canción se iniciará " +
                        "con la primera interacción."
                    );
                },



                /* =====================================
                   ERRORES
                ====================================== */

                onError: function (event) {

                    console.error(
                        "❌ ERROR DE YOUTUBE:",
                        event.data
                    );


                    switch (event.data) {


                        case 2:

                            console.error(
                                "El ID del vídeo no es válido."
                            );

                            break;



                        case 5:

                            console.error(
                                "El vídeo no puede reproducirse " +
                                "en el reproductor HTML5."
                            );

                            break;



                        case 100:

                            console.error(
                                "El vídeo no existe, es privado " +
                                "o fue eliminado."
                            );

                            break;



                        case 101:

                        case 150:

                            console.error(
                                "El propietario del vídeo no permite " +
                                "reproducirlo fuera de YouTube."
                            );

                            break;



                        default:

                            console.error(
                                "Error desconocido del reproductor."
                            );
                    }
                }
            }
        }
    );
};



/* =====================================
   ACTIVAR SONIDO
===================================== */

function activateBackgroundMusic() {

    console.log(
        "🖱️ Interacción detectada"
    );


    /*
     * Si YouTube todavía no terminó
     * de cargar, esperamos al siguiente
     * clic.
     */
    if (!youtubeReady) {

        console.log(
            "⏳ YouTube todavía no está preparado"
        );

        return;
    }


    /*
     * Si el sonido ya fue activado,
     * no necesitamos hacer nada.
     */
    if (soundActivated) {

        return;
    }


    console.log(
        "🎵 Activando sonido..."
    );


    /*
     * Quitar silencio.
     */
    youtubePlayer.unMute();


    /*
     * Volumen máximo.
     */
    youtubePlayer.setVolume(
        MUSIC_VOLUME
    );


    /*
     * Nos aseguramos de que siga
     * reproduciéndose.
     */
    youtubePlayer.playVideo();


    /*
     * Esperamos un poco y comprobamos
     * el estado REAL del reproductor.
     */
    setTimeout(
        () => {

            const state =
                youtubePlayer.getPlayerState();

            const muted =
                youtubePlayer.isMuted();

            const volume =
                youtubePlayer.getVolume();


            console.log(
                "-----------------------------"
            );

            console.log(
                "🎵 Estado:",
                state
            );

            console.log(
                "🔇 Silenciado:",
                muted
            );

            console.log(
                "🔊 Volumen:",
                volume
            );

            console.log(
                "-----------------------------"
            );


            /*
             * Estado 1 = PLAYING
             *
             * muted false = tiene sonido
             */
            if (
                state ===
                    YT.PlayerState.PLAYING &&
                muted === false
            ) {

                soundActivated = true;

                console.log(
                    "❤️ MÚSICA SONANDO CORRECTAMENTE"
                );

            } else {

                console.warn(
                    "⚠️ El navegador todavía no " +
                    "permitió activar el audio."
                );
            }

        },
        300
    );
}



/* =====================================
   PRIMERA INTERACCIÓN
===================================== */

/*
 * Usamos pointerdown porque ocurre
 * inmediatamente cuando se hace clic
 * o se toca la pantalla.
 *
 * No aparece ningún botón de música.
 *
 * Si Jhuliana pulsa:
 *
 *     💌 Abrir mi carta
 *
 * ese mismo clic activa la canción.
 */
document.addEventListener(
    "pointerdown",
    activateBackgroundMusic,
    true
);


/*
 * Fallback adicional para navegadores
 * donde pointerdown pueda comportarse
 * de forma diferente.
 */
document.addEventListener(
    "click",
    activateBackgroundMusic,
    true
);


/*
 * Compatibilidad adicional con móviles
 * antiguos.
 */
document.addEventListener(
    "touchstart",
    activateBackgroundMusic,
    true
);