const nicknameColorInput = document.getElementById('nickname-color');
const heroNicknameText = document.getElementById('hero-nickname-text');

let nicknameColor = localStorage.getItem('nickname-color')


const changeNicknameColorForStart = function () {
  if (nicknameColor === null || nicknameColor === '') {
    heroNicknameText.style.color = '#2b2b2b';
  } else {
    heroNicknameText.style.color = nicknameColor;
  }
}

changeNicknameColorForStart();


const changeNicknameColor = function () {
  heroNicknameText.style.color = this.value;
  nicknameColor = localStorage.setItem('nickname-color', this.value);
}

nicknameColorInput.addEventListener('input', changeNicknameColor);
