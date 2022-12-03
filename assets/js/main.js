"use strict";

let key;

document.addEventListener("DOMContentLoaded", init);

async function init() {
    key = await fetch('/config.json')
        .then(res => res.json())
        .then(data => {
            return data.key;
        });

    getQuote();
}

function getQuote() {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        headers: {
            'X-RapidAPI-Key': key,
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