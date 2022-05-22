const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginResult = document.querySelector("#login-result");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 버튼 동작
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// 로그인 정보 표시
function paintGreetings(username) {
  greeting.innerText = `창 밖을 봐, 
  ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

// 로그인 정보 있을 경우
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// 로그아웃 버튼 동작
function onLogoutClick() {
  localStorage.removeItem(USERNAME_KEY);
  greeting.innerText = "";
  loginInput.value = "";
  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click", onLogoutClick);
