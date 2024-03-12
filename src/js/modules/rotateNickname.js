const rotateLeftBtn = document.getElementById('rotate-left-btn');
const rotateRightBtn = document.getElementById('rotate-right-btn');
const heroNicknameTextEl = document.getElementById('hero-nickname-text');
let rotateValue = -20;

const rotateNicknameLeft = function () {
  rotateValue -=  5;
  heroNicknameTextEl.style.transform = `rotate(${rotateValue}deg)`;
}

const rotateNicknameRight = function () {
  rotateValue += 5;
  heroNicknameTextEl.style.transform = `rotate(${rotateValue}deg)`;
};


rotateLeftBtn.addEventListener('click', rotateNicknameLeft)
rotateRightBtn.addEventListener('click', rotateNicknameRight);
