window.addEventListener("DOMContentLoaded", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    hentHeader();

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

function animationBurger() {
    document.querySelector(".dropbtn").classList.toggle("change");
}

function showList() {
    console.log("hello");
    document.querySelector(".menu").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("header_stor");
}


$(function scroll_button() {
    $('a[href*=#]').on('click', function scroll_button(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});
