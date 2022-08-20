startImageTransition2();

function startImageTransition2() {
    var images2 = document.getElementsByClassName("character");
    var i = 0 ;
    setInterval(changeImage, 3000);
    
    async function changeImage() {
        images2[i].classList.toggle("fade");
        if (i != images2.length - 1){
            i = i + 1
        }
        else{
            i = 0
        }
        images2[i].classList.toggle("fade");
    }
}