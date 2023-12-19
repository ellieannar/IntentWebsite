document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    returnFirstBlockHeight();
    window.addEventListener("scroll", function () {
        // Calculate the scale factor based on the scroll position
        const scale = 1 - window.scrollY / (document.documentElement.clientHeight / 2);
        
        // Apply the scaling to the logo
        logo.style.transform = `scale(${scale > 0 ? scale : 0.01})`;
    });
});

function returnFirstBlockHeight() {
    const photosDiv = document.getElementById('first-photos');
    const image2 = document.getElementById('guitar-playing-image');
    photosDiv.style.height = (image2.height) + 'px';

    const textDiv = document.getElementById('first-text');
    const textOne = document.getElementById('first-body')
    textDiv.style.height = textOne.height + 'px'
}
