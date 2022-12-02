"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    getQuoteOfTheDay();
}

function getQuoteOfTheDay() {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        headers: {
            'X-RapidAPI-Key': "9149905435msha680f530ae4f9e0p1aca94jsn1f4a374fa3d1",
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    })
        .then(res => res.json())
        .then(data => showQuote(data.content));
}

function showQuote(quote) {
    const $sidebarNav = document.querySelector("#sidebar nav");

    const html = `<p id=quote>${quote}</p>`;
    $sidebarNav.insertAdjacentHTML("afterend", html)
}