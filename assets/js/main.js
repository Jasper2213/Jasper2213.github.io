"use strict";

const $aboutMeSection = document.querySelector("#about");
const $projectsSection = document.querySelector("#projects");
const $socialMediaSection = document.querySelector("#social-media");

document.addEventListener("DOMContentLoaded", init);

function init() {
    const $sidebarNavItem = document.querySelectorAll("#sidebar nav li");
    $sidebarNavItem.forEach(item => item.addEventListener("click", itemClicked));

    getQuote();
}

function itemClicked(e) {
    const $sidebarNavItem = document.querySelectorAll("#sidebar nav li");
    $sidebarNavItem.forEach(item => item.classList.remove("selected"));

    e.currentTarget.classList.add("selected");

    switch (e.currentTarget.innerText) {
        case "About me":
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

    addStylingToCards();
}

function addStylingToCards() {
    document.querySelectorAll(".project").forEach(card => {
    });
}

function showSocialMedia() {
    $aboutMeSection.classList.add("hidden");
    $projectsSection.classList.add("hidden");
    $socialMediaSection.classList.remove("hidden");

}

function getQuote() {
    const $quoteDiv = document.querySelector("div#quoteLocation");
    $quoteDiv.innerHTML = `<em class="fas fa-spinner fa-spin"></em>`;

    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        headers: {
            'X-RapidAPI-Key': "c47a3f6b32msh5821ef25f0b9d6ep1e3a44jsn0ebd4f66b9a7", // Can't find a better way of storing API key atm 😒
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    })
        .then(res => res.json())
        .then(data => {
            $quoteDiv.innerHTML = "";
            $quoteDiv.insertAdjacentHTML("beforeend", `<p id=quote>${data.content}</p>`);
        });
}
