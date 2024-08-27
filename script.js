
// JS CODE

const isOnline = navigator.onLine;
const loaderElement = document.querySelector('.loader');

loaderElement.style.display = isOnline ? "grid" : "none";

window.addEventListener("load", () => {
  loaderElement.style.display = "none"; 
});

// Debug, true;
// Crx, true;
