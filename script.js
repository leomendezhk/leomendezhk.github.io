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

//heading effect
const heading = document.getElementById("heading");

// reach out efffect
document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".bouncer");
  element.classList.add("bounce-animation");

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
