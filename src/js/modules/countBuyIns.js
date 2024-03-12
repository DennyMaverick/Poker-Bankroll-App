const quontutyBuyInValueEl = document.getElementById('entry-value-buy-in');
const inputEl = document.getElementById('input');
const entryValueEl = document.getElementById('entry-value');

let currentInputValue = +localStorage.getItem('input-value');
const startBuyIn = 0.1;

if (currentInputValue === 0) {
  currentInputValue = 0;
}

const countBuyins = function () {
  let entryValue = +entryValueEl.textContent;

  if (entryValue) {
    let currentAmountBuyin = Math.round(currentInputValue / entryValue);
    quontutyBuyInValueEl.textContent = currentAmountBuyin;
  } else {
    quontutyBuyInValueEl.textContent = 0;
  }

  if (entryValue < startBuyIn) {
  }
};

countBuyins();

inputEl.addEventListener('input', function () {
  currentInputValue = this.value;
  countBuyins();
});

inputEl.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    countBuyins();
  }
});

inputEl.addEventListener('blur', () => {
  countBuyins();
});
