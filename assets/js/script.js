'use strict';


/**
 * Add event listener on multiplt elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}




/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => navbar.classList.toggle("active");

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled down to 100px header will be active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", ()=> {
  if(window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/** AUTOTEXT EFFECT */

const autotextEl = document.querySelector(".hero-autotext");

const careers = ["Blogger", "Web Developer", "Freelancer", "Graphic Designer"];

let carrerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    autotextEl.innerHTML =  `
    <span>I am ${careers[carrerIndex].slice(0,1) === "I" ? "an <br>" : "a <br>"} ${careers[carrerIndex].slice(0,characterIndex)}</span> 
    `;
    if (characterIndex === careers[carrerIndex].length){
            carrerIndex++;
            characterIndex = 0;
    }

    if(carrerIndex === careers.length)
    {
        carrerIndex = 0;
    }
    setTimeout(updateText, 400);
}

/** POP-UP EFFECTS */

const subNavBtnEl = document.querySelector(".nav-sub-btn");

const btnEl = document.querySelector(".btn-primary");

const popupContainerEl = document.querySelector(".popup-container");

const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", ()=>{
  subNavBtnEl.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", ()=>{
  subNavBtnEl.classList.remove("active");
    popupContainerEl.classList.add("active")
})


/** RIPPLE EFFECTS */

const btnEffectEl = document.querySelector(".card-ripple");

btnEffectEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEffectEl.offsetLeft);
    const y = (event.pageY - btnEffectEl.offsetTop);

    btnEffectEl.style.setProperty("--xPos", x + "px");
    btnEffectEl.style.setProperty("--yPos", y + "px");
})