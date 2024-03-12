const nicknameInput = document.getElementById('hero-nickname');
const heroNicknameText = document.getElementById('hero-nickname-text');
const nicknameValue = localStorage.getItem('nickname-text');
const nicknameValueTextInput = localStorage.getItem('nickname-text');

nicknameInput.value = nicknameValueTextInput;


const changeNicknameForStart = function () {
  if (nicknameValue === null || nicknameValue === '') {
    heroNicknameText.value = 'Your nickname';
  } else {
    heroNicknameText.value = nicknameValue;
  }
};

changeNicknameForStart();

const changeNickname = function () {
  heroNicknameText.value = this.value;
  localStorage.setItem('nickname-text', this.value);
};

nicknameInput.addEventListener('input', changeNickname);