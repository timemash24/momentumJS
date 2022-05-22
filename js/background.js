const width = 1600;
const height = 900;
const KEYWORD = "space";

const url = `https://source.unsplash.com/${width}x${height}/?${KEYWORD}`;
const bgImg = document.createElement("img");
const windowImg = document.createElement("img");

bgImg.id = "bgImg";
bgImg.src = url;
windowImg.id = "windowImg";
windowImg.src = "img/window.png";

document.body.appendChild(bgImg);
document.body.appendChild(windowImg);

// function onWindowResize() {
//   const img = document.querySelector(".bgImg");
//   img.style.width = "100vh";
// }

// window.addEventListener("resize", onWindowResize);
