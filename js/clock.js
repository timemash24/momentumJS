function getClock() {
  const clock = document.querySelector('#clock');
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const fullDate = new Date();
  const hours = String(fullDate.getHours()).padStart(2, '0');
  const minutes = String(fullDate.getMinutes()).padStart(2, '0');
  const seconds = String(fullDate.getSeconds()).padStart(2, '0');
  const day = weekdays[fullDate.getDay()];
  const month = fullDate.getMonth();
  const date = fullDate.getDate();
  clock.innerText = `${day} ${month}/${date}
  ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
