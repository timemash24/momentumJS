const clock = document.querySelector("h1#clock");
const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

// 시계 만들기
function getClock() {
  const fullDate = new Date();
  const hours = String(fullDate.getHours()).padStart(2, "0");
  const minutes = String(fullDate.getMinutes()).padStart(2, "0");
  const seconds = String(fullDate.getSeconds()).padStart(2, "0");
  const day = weekdays[fullDate.getDay()];
  const month = fullDate.getMonth();
  const date = fullDate.getDate();
  clock.innerText = `${day} ${month}/${date}
  ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
