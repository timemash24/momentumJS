// 배경 이미지 변경하기
// 1. tag 입력받고 그에 따라 이미지 새로고침
// 2. tag 입력값 저장하고 새로고침시 그에 따른 랜덤 이미지 표시

const tagForm = document.querySelector("#tag-form");
const tagInput = document.querySelector("#tag-form input");
let keyword = "space";
const TAG = "tag";

if (localStorage.getItem(TAG)) {
  keyword = localStorage.getItem(TAG);
  tagInput.value = keyword;
}

const url = `https://source.unsplash.com/1600x900/?${keyword}`;
const windowImg = document.createElement("img");
const bgImg = document.createElement("img");
const imgCover = document.createElement("img");

const body = document.body;
const middleMenu = document.querySelector(".middle_menu");

windowImg.id = "windowImg";
windowImg.src = "img/window.png";
// body.appendChild(windowImg);
bgImg.src = url;
bgImg.classList.add("bg_img");
imgCover.classList.add("img_cover");

// body.style.backgroundImage = `url(${url})`;
body.appendChild(bgImg);
body.appendChild(imgCover);

function searchByTag(tag) {
  fetch(`https://source.unsplash.com/1600x900/?${tag.toLowerCase()}`).then(
    (response) => {
      // body.style.backgroundImage = `url(${response.url})`;
      const newBgImg = document.querySelector(".bg_img");
      newBgImg.src = response.url;
    }
  );
}

function handleTagSubmit(event) {
  event.preventDefault();
  const tag = tagInput.value;
  searchByTag(tag);
  localStorage.setItem(TAG, tag);
}

tagForm.addEventListener("submit", handleTagSubmit);

// function onWindowResize() {
//   body.style.backgroundSize = "cover";
// }

// window.addEventListener("resize", onWindowResize);
