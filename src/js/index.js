import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("Be hydrated 🥛");

const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button-add--js");
const buttonRemove = document.querySelector(".button-remove--js");

let currentGlassCounter = 0;

const key = new Date().toISOString().slice(0, 10);
console.log(key);

const localStorageValue = localStorage.getItem(key);
if (localStorageValue) {
  currentGlassCounter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentGlassCounter;

buttonAdd.addEventListener("click", () => {
  currentGlassCounter++;
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});

buttonRemove.addEventListener("click", () => {
  if (currentGlassCounter > 0) currentGlassCounter--;
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});
