const temples = [
{
    templeName: "San Diego California Temple",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "images/temple1.jpg"
},
{
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "images/temple2.jpg"
},
{
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/temple3.jpg"
},
{
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "images/temple4.jpg"
},
{
    templeName: "Mesa Arizona Temple",
    location: "Mesa, Arizona, United States",
    dedicated: "1927, October, 23",
    area: 113916,
    imageUrl: "images/temple5.jpg"
},
{
    templeName: "Idaho Falls Temple",
    location: "Idaho Falls, Idaho, United States",
    dedicated: "1945, September, 23",
    area: 92000,
    imageUrl: "images/temple6.jpg"
},
{
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "images/temple7.jpg"
},
{
    templeName: "Nauvoo Temple",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 58000,
    imageUrl: "images/temple8.jpg"
},
{
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/temple9.jpg"
}
];

const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("#page-title");

function displayTemples(filteredTemples) {

    gallery.innerHTML = "";

    filteredTemples.forEach((temple) => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}"
                 alt="${temple.templeName}"
                 loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    pageTitle.textContent = "Old Temples";

    displayTemples(
        temples.filter(
            temple => parseInt(temple.dedicated) < 1900
        )
    );
});

document.querySelector("#new").addEventListener("click", () => {
    pageTitle.textContent = "New Temples";

    displayTemples(
        temples.filter(
            temple => parseInt(temple.dedicated) > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", () => {
    pageTitle.textContent = "Large Temples";

    displayTemples(
        temples.filter(
            temple => temple.area > 90000
        )
    );
});

document.querySelector("#small").addEventListener("click", () => {
    pageTitle.textContent = "Small Temples";

    displayTemples(
        temples.filter(
            temple => temple.area < 10000
        )
    );
});

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

    menuButton.textContent =
        nav.classList.contains("open") ? "✖" : "☰";
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;