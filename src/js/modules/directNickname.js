const directBtns = document.querySelectorAll(
  '.direction-nickname-controls button'
);
const heroNicknameTextEl = document.getElementById('hero-nickname-text');

directBtns.forEach(item => {
  item.addEventListener('click', event => {
    if (
      event.target.closest('.direction-nickname-controls__btn').dataset
        .direction === 'left'
    ) {
      heroNicknameTextEl.style.left =
        parseInt(
          heroNicknameTextEl.style.left ||
            getComputedStyle(heroNicknameTextEl)['left'],
          10
        ) -
        10 +
        'px';
    } else if (
      event.target.closest('.direction-nickname-controls__btn').dataset
        .direction === 'top'
    ) {
      heroNicknameTextEl.style.top =
        parseInt(
          heroNicknameTextEl.style.top ||
            getComputedStyle(heroNicknameTextEl)['top'],
          10
        ) -
        10 +
        'px';
    } else if (
      event.target.closest('.direction-nickname-controls__btn').dataset
        .direction === 'right'
    ) {
      heroNicknameTextEl.style.left =
        parseInt(
          heroNicknameTextEl.style.left ||
            getComputedStyle(heroNicknameTextEl)['left'],
          10
        ) +
        10 +
        'px';
    } else if (
      event.target.closest('.direction-nickname-controls__btn').dataset
        .direction === 'bottom'
    ) {
      heroNicknameTextEl.style.bottom =
        parseInt(
          heroNicknameTextEl.style.bottom ||
            getComputedStyle(heroNicknameTextEl)['bottom'],
          10
        ) -
        10 +
        'px';
    }
  });
});
