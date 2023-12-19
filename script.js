document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");

    window.addEventListener("scroll", function () {
        // Calculate the scale factor based on the scroll position
        const scale = 1 - window.scrollY / (document.documentElement.clientHeight / 2);
        
        // Apply the scaling to the logo
        logo.style.transform = `scale(${scale > 0 ? scale : 0.01})`;
    });
});
