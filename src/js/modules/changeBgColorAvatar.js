const changeBgInput = document.getElementById('change-input');
const photoHero = document.getElementById('photo-hero');
const changeBorderColorInput = document.getElementById('change-input-border');
const removeBorderBtn = document.getElementById('remove-border');

let backgroundColorValueAvatar = localStorage.getItem(
  'background-color-avatar'
);

let borderColorValueAvatar = localStorage.getItem('border-color-avatar');

let boxShadowValueAvatar = localStorage.getItem('box-shadow-avatar');

const changeBgColorAvatarForStart = function () {

  if (backgroundColorValueAvatar === null || backgroundColorValueAvatar === '') {
    photoHero.style.backgroundColor = '#fff';
  } else {
    photoHero.style.backgroundColor = backgroundColorValueAvatar;
  }

}

changeBgColorAvatarForStart();

const changeBgColorAvatar = function () {

  photoHero.style.backgroundColor = this.value;

  localStorage.setItem('background-color-avatar', this.value);

}

const changeBorderColorAvatarForStart = function () {

  if (borderColorValueAvatar === null || borderColorValueAvatar === '') {
    photoHero.style.borderColor = '';
  } else {
    photoHero.style.borderColor = borderColorValueAvatar;
  }

}

changeBorderColorAvatarForStart();

const changeBoxShadowAvatarForStart = function () {
  if (boxShadowValueAvatar === null || boxShadowValueAvatar === '') {
    photoHero.style.boxShadow = '';
  } else {
    photoHero.style.boxShadow = `${boxShadowValueAvatar}`;
  }
};

changeBoxShadowAvatarForStart();

const changBorderColorAvatar = function () {
  photoHero.style.borderColor = this.value;

  photoHero.style.boxShadow = `0 0 15px ${this.value}`;

  // ================================

  borderColorValueAvatar = this.value;

  localStorage.setItem('border-color-avatar', borderColorValueAvatar);

  // ===============================

  boxShadowValueAvatar = `0 0 15px ${this.value}`;

  localStorage.setItem('box-shadow-avatar', boxShadowValueAvatar);
};



const removeBorder = function () {
  photoHero.style.borderColor = 'transparent';
  photoHero.style.boxShadow = '';

localStorage.setItem('border-color-avatar', '');
localStorage.setItem('box-shadow-avatar', '');
};

changeBgInput.addEventListener('input', changeBgColorAvatar);

changeBorderColorInput.addEventListener('input', changBorderColorAvatar);

removeBorderBtn.addEventListener('click', removeBorder);
