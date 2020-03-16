window.addEventListener("DOMContentLoaded", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    hentHeader();
    hentFooter();

}

async function hentHeader() {
    const headerMenu = await fetch("inc/header.html");
    const including = await headerMenu.text();
    document.querySelector("header").innerHTML = including;
    console.log(headerMenu);
    document.querySelector(".dropbtn").addEventListener("click", () => {
        showList();
        animationBurger();
    });
}
async function hentFooter() {
    const footer = await fetch("inc/footer.html");
    const including = await footer.text();
    document.querySelector("footer").innerHTML = including;
    console.log(footer);
}

function animationBurger() {
    document.querySelector(".dropbtn").classList.toggle("change");
}

function showList() {
    console.log("hello");
    document.querySelector(".menu").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("header_stor");
}

var slideIndex, slides, dot, captionText;

function initGallery() {
    slideIndex = 0;
    slides = document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity = 1;

    captionText = document.querySelector(".captionTextHolder .captionText");
    captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

    //add dots
    dots = [];
    var dotsContainer = document.getElementById("dotsContainer"),
        i;
    for (i = 0; i < slides.length; i++) {
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick", "moveSlide(" + i + ")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();

function plusSlides(n) {
    moveSlide(slideIndex + n);
}

function moveSlide(n) {
    var i;
    var current, next;
    var moveSlideAnimClass = {
        forCurrent: "",
        forNext: ""
    };
    var slideTextAnimClass;
    if (n > slideIndex) {
        if (n >= slides.length) {
            n = 0;
        }
        moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
        moveSlideAnimClass.forNext = "moveLeftNextSlide";
        slideTextAnimClass = "slideTextFromTop";
    } else if (n < slideIndex) {
        if (n < 0) {
            n = slides.length - 1;
        }
        moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
        moveSlideAnimClass.forNext = "moveRightPrevSlide";
        slideTextAnimClass = "slideTextFromBottom";
    }

    if (n != slideIndex) {
        next = slides[n];
        current = slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity = 0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex = n;
    }

}
var timer = null;

function setTimer() {
    timer = setInterval(function () {
        plusSlides(1);
    }, 3000);
}
setTimer();
