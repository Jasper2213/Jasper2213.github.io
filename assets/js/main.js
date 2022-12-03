"use strict";

let key;

const $aboutMeSection = document.querySelector("#about");
const $projectsSection = document.querySelector("#projects");
const $socialMediaSection = document.querySelector("#social-media");

document.addEventListener("DOMContentLoaded", init);

async function init() {
    const $sidebarNavItem = document.querySelectorAll("#sidebar nav li");
    $sidebarNavItem.forEach(item => item.addEventListener("click", itemClicked));

    key = await fetch('/config.json')
        .then(res => res.json())
        .then(data => {
            return data.key;
        });

    getQuote();
}

function itemClicked(e) {
    const $sidebarNavItem = document.querySelectorAll("#sidebar nav li");
    $sidebarNavItem.forEach(item => item.classList.remove("selected"));

    e.currentTarget.classList.add("selected");

    switch (e.currentTarget.innerText) {
        case "About me":
            console.log("about me clicked")
            showAboutMe();
            break;

        case "Projects":
            showProjects();
            break;

        case "Social media":
            showSocialMedia();
            break;
    }
}

function showAboutMe() {
    $aboutMeSection.classList.remove("hidden");
    $projectsSection.classList.add("hidden");
    $socialMediaSection.classList.add("hidden");
}

function showProjects() {
    $aboutMeSection.classList.add("hidden");
    $projectsSection.classList.remove("hidden");
    $socialMediaSection.classList.add("hidden");
}

function showSocialMedia() {
    $aboutMeSection.classList.add("hidden");
    $projectsSection.classList.add("hidden");
    $socialMediaSection.classList.remove("hidden");

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
