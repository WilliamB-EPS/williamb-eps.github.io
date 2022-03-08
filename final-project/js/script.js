// code for nav bar animation:

function openNav() {
    document.getElementById("nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("nav").style.height = "0%";
}

// code for slide show on portfolio page:
// JavaScript influenced by (not copied from): https://www.w3schools.com/howto/howto_js_slideshow.asp -->


// set intial slide index
var slideIdx = 2;

// increment function for buttons
function increment(n) {
    displayContent(slideIdx += n);
}

// display the current slide (set others to display = none)
function displayContent(n) {
    var i;
    var mySlides = document.getElementsByClassName("slides");
    // Right bound - resets to first slide
    if (n > mySlides.length) {
        slideIdx = 1
    }
    // Left bound - resets to last slide
    if (n < 1) {
        slideIdx = mySlides.length;
    }
    // hide all slides
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";  
    }
    // display only the current slide
    mySlides[slideIdx-1].style.display = "block";  
}

// code for slider on case study page 
// JavaScript influenced by (not copied from) Taras' demo: https://jacketedsquash6.github.io/sliderDemo/

function cropImage(val) {
    percent = val + "%";
    document.getElementsByClassName("before-img")[0].style.width = percent;
}

document.addEventListener("DOMContentLoaded", function() {
    cropImage(document.getElementById("slider").value)
});
