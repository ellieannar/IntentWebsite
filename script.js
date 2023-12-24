/* confirm("Website currently under construction. Please be patient :)\nPress 'OK' for site preview."); */

let slideIndex = 1;
showSlide(slideIndex);

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
    console.log("Displaying: " + imgSources[slideIndex-1] + ", slideIndex: " + slideIndex);
    let image = document.getElementById("slide-image");
    image.src = imgSources[slideIndex-1];
    image.alt = imgAlts[slideIndex-1];
}

