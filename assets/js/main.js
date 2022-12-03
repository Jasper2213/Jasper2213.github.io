"use strict";

import { getKey } from "/config.js"

document.addEventListener("DOMContentLoaded", init);

function init() {
    getQuoteOfTheDay();
}

function getQuoteOfTheDay() {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        headers: {
            'X-RapidAPI-Key': getKey(),
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