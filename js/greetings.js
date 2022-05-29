// 사용자 로그인 기능과 환영 멘트

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginResult = document.querySelector('#login-result');
const greeting = document.querySelector('#greeting');
const logoutBtn = document.querySelector('#logout-btn');

const HIDDEN_CLASSNAME = 'hidden';
const MIDDLE_CLASSNAME = 'middle_menu';
const NARROW_CLASSNAME = 'narrow';
const USERNAME_KEY = 'username';

// 로그인 버튼 동작
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  onNarrowWindow(username);
}

// 로그인 정보 표시
function paintGreetings(username) {
  greeting.innerText = `창 밖을 봐, 
  ${username}`;
  loginResult.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

// 로그인 정보 확인 후 동작
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// 로그아웃 버튼 동작
function onLogoutClick() {
  localStorage.removeItem(USERNAME_KEY);
  greeting.innerText = '';
  loginInput.value = '';
  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  loginResult.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  onNarrowWindow(localStorage.getItem(USERNAME_KEY));
}

logoutBtn.addEventListener('click', onLogoutClick);

function onNarrowWindow(username) {
  // if (window.innerHeight <= 412) {
  //   loginForm.classList.add(HIDDEN_CLASSNAME);
  //   loginResult.classList.add(HIDDEN_CLASSNAME);
  // }
  if (username) {
    if (window.innerWidth <= 1121) {
      loginForm.classList.add(HIDDEN_CLASSNAME);
      loginForm.classList.remove(NARROW_CLASSNAME);
      greeting.innerText = `아담한 세계도 
    아늑하지 ${username} ?`;
    } else {
      greeting.innerText = `창 밖을 봐, 
  ${username}`;
    }
  } else {
    if (window.innerWidth <= 1121) {
      loginForm.classList.add(NARROW_CLASSNAME);
    } else {
      loginForm.classList.remove(NARROW_CLASSNAME);
    }
  }
}

// 화면 좁아질 경우 문구 바꾸기
function handleWindowResize() {
  const username = localStorage.getItem(USERNAME_KEY);
  onNarrowWindow(username);
}

onNarrowWindow(localStorage.getItem(USERNAME_KEY));

window.addEventListener('resize', handleWindowResize);
