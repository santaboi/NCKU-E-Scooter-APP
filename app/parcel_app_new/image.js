//https://www.geeksforgeeks.org/image-transition-with-fading-effect-using-javascript/
startImageTransition();

function startImageTransition() {

    var images = document.getElementsByClassName("character");

    // Set opacity of all images to 1
    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    var top = 1;

    var cur = images.length - 1;

    setInterval(changeImage, 3000);

    async function changeImage() {

        // Stores index of next image
        var nextImage = (1 + cur) % images.length;


        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        // await is used to make sure
        // the program waits till transition()
        // is completed
        // before executing the next line of code
        await transition();

        // Now, the transition function is completed
        // thus, we can say that the opacity of the
        // current image is now 0

        // Set the z-index of current image to top
        images[cur].style.zIndex = top;

        // Set the z-index of nextImage to top+1
        images[nextImage].style.zIndex = top + 1;

        // Increment top
        top = top + 1;

        // Change opacity of current image back to 1
        // since zIndex of current is less than zIndex
        // of nextImage
        /* changing it's opacity back to 1 will not
           make the image appear again*/
        images[cur].style.opacity = 1;
        // Set cur to nextImage
        cur = nextImage;
    }

    /* This function changes the opacity of
    current image at regular intervals*/
    function transition() {
        return new Promise(function (resolve, reject) {

            // del is the value by which opacity is
            // decreased every interval
            var del = 0.01;

            // id stores ID of setInterval
            // this ID will be used later
            // to clear/stop setInterval
            // after we are done changing opacity
            var id = setInterval(changeOpacity, 10);

            // changeOpacity() decreasing opacity of
            // current image by del
            // when opacity reaches to 0, we stops/clears
            // the setInterval and resolve the function
            function changeOpacity() {
                let next_one = 0;
                images[cur].style.opacity -= del;
                if (cur == images.length - 1 )
                    next_one = 0 
                else 
                    next_one = cur + 1 
                
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
                //setTimeout(() => {
                //    images[cur].style.display = "none";
                //    images[next_one].style.display = "block";
                //}, 1000)
            }
        })
    }
}