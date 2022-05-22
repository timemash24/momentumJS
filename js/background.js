// const width = window.innerWidth;
// const height = window.innerHeight;
const width = 1600;
const height = 900;
const KEYWORD = "sky";

const url = `https://source.unsplash.com/${width}x${height}/?${KEYWORD}`;
const bgImg = document.createElement("img");

bgImg.classList.add("bgImg");
bgImg.src = url;

document.body.appendChild(bgImg);

// function onWindowResize() {
//   const img = document.querySelector(".bgImg");
//   img.style.width = "100vh";
// }

// window.addEventListener("resize", onWindowResize);
