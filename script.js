/* confirm("Website currently under construction. Please be patient :)\nPress 'OK' for site preview."); */

//Carousel code -----------------------------------
let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function () {
    showSlide(slideIndex);

    var rightButton = document.getElementById("right-button");
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    rightButton.style.left = (screenWidth - 89.5) + 'px';
    

})




// Left and right moving slides
function moveSlide(i) {
    showSlide(slideIndex += i);
}

function jumpToSlide(i) {
    showSlide(slideIndex = i);
}

function showSlide() {
    
    let imgSources = ["Media/campersWorshiping.jpg","Media/guitarplaying.jpg", "Media/slipnslide.jpg"];
    let imgAlts = ["Campers worshiping outdorrs", "Girl playing guitar on stage", "Campers smiling for the camera"];
    if (slideIndex > imgSources.length) {
        slideIndex = 1;
    } else if (slideIndex <= 0) {
        slideIndex = imgSources.length;
    }
    let image = document.getElementById("slide-image");
    image.src = imgSources[slideIndex-1];
    image.alt = imgAlts[slideIndex-1];
}
