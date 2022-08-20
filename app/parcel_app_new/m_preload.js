var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    setInterval(function () {
        if (!loader.style.opacity) {
            loader.style.opacity = 1;
        }
        if (loader.style.opacity > 0) {
            loader.style.opacity -= 0.1;
        } else {
            clearInterval();
            loader.style.display = "none";
        }
    }, 50);

})