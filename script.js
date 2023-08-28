//dot loading
const spanElement = document.getElementById("loading-dots");
let dotsCount = 1;

setInterval(() => {
  spanElement.textContent = ".".repeat(dotsCount);
  dotsCount += 1;

  if (dotsCount > 3) {
    dotsCount = 1;
  }
}, 500);

// reach out efffect
document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".bouncer");
  element.classList.add("bounce-animation");

  //remove this one? or keep it for performance?
  element.addEventListener("animationend", () => {
    element.classList.remove("bounce-animation");
  });
});

//smooth scroolling
const links = document.querySelectorAll("a.smooth-scroll");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      // Calculate the offset of the target section from the top of the page
      const offset = target.offsetTop;

      // Use the scrollIntoView method with smooth behavior to scroll to the target section
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});

// MAP
var map = L.map("map").setView([22.28723210219561, 114.19037337459282], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

const lat = 22.28723210219561;
const lng = 114.19037337459282;

var marker = L.marker([lat, lng]).addTo(map);

marker
  .bindPopup(
    "<b>Come Visit!</b><br>Xccelerate, 3/F, Citicorp Centre, 18 Whitfield Rd, Tin Hau."
  )
  .openPopup();
