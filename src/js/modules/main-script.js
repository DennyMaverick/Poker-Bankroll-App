//* ========== lazyload ==========

var lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});

const bankrollInput = document.querySelector('.bankroll-app__input');
const levelUpValueEl = document.getElementById('level-up');
const heroNameEl = document.getElementById('heroName');
const photoHeroPictureIMG = document.getElementById('photoHeroPic');
const photoHeroPictureWEBP = document.querySelector(
  '.hero-left-side__photo picture source'
);
const entryValueEl = document.getElementById('entry-value');
const statusLevelTextElDecrease = document.querySelector(
  '.side-bar__decrease-level'
);
const statusLevelTextElIncrease = document.querySelector(
  '.side-bar__increase-level'
);
const boxCost = document.querySelector('.entry__box-cost');
const entryCashValue = document.getElementById('entry-value-cash');
const entryTextForbiddenTextEl = document.querySelector(
  '.entry__cash-forbiden-text'
);
const entryBoxCashCostEl = document.querySelector('.entry__cash-value-box');
const entryDescriptionTextCash = document.getElementById(
  'entry-description-text-cash'
);
const entryBuyinValueCash = document.getElementById('entry-value-buy-in-cash');
const entrySatValue = document.getElementById('entry-sat-value');
const entrySatTextForbidden = document.querySelector(
  '.entry__sat-text-forbidden'
);
const satBuyinValue = document.getElementById('entry-value-buy-in-sat');
const entryBoxCostSat = document.querySelector('.entry__box-cost-sat');

const rangsRus = [
  'рыбка',
  'крабик',
  'малыш - морская звезда',
  'маленькая медуза',
  'морской конек',
  'морской окунь',
  'маленький осьминог',
  'черепашка',
  'паучок - скакун Багира',
  'кустарниковая гадюка',
  'игуан',
  'синий дельфин',
  'большой морж',
  'снежный барс',
  'кенгуренок',
  'скат',
  'креветка',
  'пингвин',
  'рыбка - клоун',
  'утконос',
  'тасманский дьявол',
  'губка боб',
  'патрик',
  'сквидвард',
  'рыбка - меч',
  'акула - молот',
  'касатка',
  'чёрная пантера',
  'лев',
  'крокодил',
  'белый волк',
  'черепашка - ниндзя Рафаэль',
  'черепашка - ниндзя Леонардо',
  'черепашка - ниндзя Донателло',
  'черепашка - ниндзя Микеланджело',
  'кролик Роджер',
  'лисенок',
  'чарли',
  'барсик',
  'шахматный гений',
  'компьютерный гений',
  'покерный гений',
  'алекс фоксен',
  'ящерка',
  'панда',
  'николас кэйдж',
  'малыш - хамелеон',
  'лягушонок',
  'бельчонок крис',
  'пингвиненок',
  'сноубордист',
  'джокер',
  'дракоша',
  'малыш - авокадо',
  'коала',
  'змея джерри',
  'дино',
  'летучая мышь бэтти',
  'диджей',
  'скейтер',
  'рок - звезда',
];

const heroPicturesSrc = [
  'fish-changed',
  'crab-changed',
  'sea-star-changed',
  'meduza-changed',
  'sea-horse-changed',
  'perch-changed',
  'octopus-changed',
  'turtle-changed',
  'spider-changed',
  'snake-changed',
  'iguana-changed',
  'dolphin-changed',
  'warlus-changed',
  'snow-bars-changed',
  'kangaroo-changed',
  'stingray-changed',
  'shrimp-changed',
  'pingvin-changed',
  'clown-changed',
  'platypus-changed',
  'tasmanian-devil-changed',
  'sponge-bob-changed',
  'patrik-changed',
  'skwidward-changed',
  'sword-fish-changed',
  'shark-molot-changed',
  'kasatka-changed',
  'pantera-changed',
  'lion-changed',
  'crocodile-changed',
  'wolf-changed',
  'tirtle-ninja-raffael-changed',
  'tirtle-ninja-leo-changed',
  'tirtle-ninja-don-changed',
  'tirtle-ninja-mike-changed',
  'rabbit-rojer',
  'fox',
  'charlie',
  'barsik',
  'chess-master',
  'pc-master',
  'poker-master',
  'alex-foxen',
  'lizzard-little',
  'panda',
  'nicolas',
  'chameleon',
  'little-frog',
  'squirrel',
  'pinguin',
  'snowboardist',
  'joker',
  'little-dragon',
  'avocado',
  'koala',
  'snake',
  'dino',
  'bat',
  'dj',
  'skater',
  'rock-star',
];

const bankrollScores = [
  30, 75, 150, 300, 600, 900, 1200, 1500, 3000, 6000, 9000, 15000, 30000, 45000,
  60000, 75000, 90000, 105000, 120000, 135000, 150000, 165000, 180000, 195000,
  210000, 225000, 240000, 255000, 270000, 285000, 300000, 350000, 400000,
  450000, 500000, 550000, 600000, 650000, 700000, 750000, 800000, 850000,
  900000, 950000, 1000000, 1050000, 1100000, 1150000, 1200000, 1250000, 1300000,
  1350000, 1400000, 1450000, 1500000, 1550000, 1600000, 1650000, 1700000,
  1750000, 1800000,
];

const bankrollScoresCash = [
  1000, 2500, 5000, 12500, 25000, 50000, 100000, 250000, 500000,
];

const bankrollNLLimits = [2, 5, 10, 25, 50, 100, 200, 500, 1000];

const satellitesCost = [0.25, 1, 2, 3, 5, 10, 25, 50, 100, 200, 500, 1000];

const bankrollSatArr = [
  125, 500, 1000, 1500, 2500, 5000, 12500, 25000, 50000, 100000, 250000, 500000,
];

let currentLevel = localStorage.getItem('currentLevel');

const startLevelBuyin = 0.1;

let currentStartBankroll;

const maxLevel = 61;

// set level up value

let currentLevelUp = 1;

let currentInputValue = 0;

bankrollInput.addEventListener('input', function () {
  let currentValue = +this.value;
  localStorage.setItem('input-value', currentValue);
  currentInputValue = +localStorage.getItem('input-value');
  if (this.value < 0) {
    this.value = 0;
  }
});

if (currentInputValue === 0) {
  bankrollInput.value = 0;
}

currentInputValue = +localStorage.getItem('input-value');

bankrollInput.value = currentInputValue;

const setLevelUp = function () {
  let currentBankrollValue = currentInputValue;

  const reccomendBankroll = bankrollScores.find((item, index) => {
    if (item >= currentBankrollValue) {
      currentLevelUp = index;
      localStorage.setItem('currentLevel', +currentLevelUp);
      if (index === 0) {
        currentLevelUp = 1;
        localStorage.setItem('currentLevel', 1);
      }
      return item;
    } else {
      currentLevelUp = maxLevel;
      localStorage.setItem('currentLevel', +maxLevel);
    }
  });

  const currentBankrollEntry = bankrollScores[currentLevelUp - 1] / 1000;

  if (
    currentBankrollValue < 0 ||
    currentBankrollValue < startLevelBuyin ||
    currentBankrollValue == ''
  ) {
    entryValueEl.textContent = 'не хватает';
    boxCost.style.color = '#d63838';
  } else {
    entryValueEl.textContent = currentBankrollEntry.toFixed(2);
    boxCost.style.color = '#94da25';
  }

  levelUpValueEl.textContent = currentLevelUp;

  localStorage.setItem('currentLevelUp', currentLevelUp);
};

setLevelUp();

const changeStatusTextLevel = function () {
  if (currentLevelUp > currentLevel) {
    statusLevelTextElIncrease.classList.add('side-bar__status-level-up');
    statusLevelTextElDecrease.classList.remove('side-bar__status-level-down');
    setTimeout(() => {
      statusLevelTextElIncrease.classList.remove('side-bar__status-level-up');
    }, 10000);
  } else if (
    currentLevelUp < currentLevel &&
    currentInputValue > startLevelBuyin
  ) {
    statusLevelTextElDecrease.classList.add('side-bar__status-level-down');
    statusLevelTextElIncrease.classList.remove('side-bar__status-level-up');
    setTimeout(() => {
      statusLevelTextElDecrease.classList.remove('side-bar__status-level-down');
    }, 10000);
  }
};

const updateCurrentLevel = function () {
  currentLevel = localStorage.getItem('currentLevelUp');
};

const setLevelName = function () {
  for (let i = 0; i < rangsRus.length; i++) {
    if (currentLevelUp === i) {
      heroNameEl.textContent = rangsRus[i - 1];
    }
    if (currentLevelUp === maxLevel) {
      heroNameEl.textContent = rangsRus[i];
    }
  }
};

setLevelName();

const setHeroPicture = function () {
  for (let i = 1; i <= rangsRus.length; i++) {
    if (currentLevelUp === i) {
      photoHeroPictureIMG.src = './img/' + heroPicturesSrc[i - 1] + '.png';
    }
  }
};

setHeroPicture();

// let currentCashLimit = +localStorage.getItem('current-cash-limit');

const setLimitCash = function () {
  let currentLimitCashBankroll = 0;
  for (let i = 0; i < bankrollNLLimits.length; i++) {
    if (currentInputValue >= bankrollScoresCash[i]) {
      currentLimitCashBankroll = bankrollScoresCash[i];
    }
  }

  let currentLimitNL = currentLimitCashBankroll / 1000;

  if (currentLimitCashBankroll === 0) {
    entryBoxCashCostEl.classList.add('entry__cash-value-box--forbidden');
    entryTextForbiddenTextEl.classList.add('entry__cash-forbiden-text--active');
    entryDescriptionTextCash.classList.add(
      'entry__description-text--forbidden'
    );
    entryCashValue.textContent = 2;
    entryBuyinValueCash.textContent = Math.floor(currentInputValue / 2);
  } else {
    entryBoxCashCostEl.classList.remove('entry__cash-value-box--forbidden');
    entryTextForbiddenTextEl.classList.remove(
      'entry__cash-forbiden-text--active'
    );
    entryDescriptionTextCash.classList.remove(
      'entry__description-text--forbidden'
    );
    entryCashValue.textContent = currentLimitNL;
    entryBuyinValueCash.textContent = Math.floor(
      currentInputValue / currentLimitNL
    );
  }
};

setLimitCash();

const setSatellitesValue = function () {
  let currentBankrollBuyin = 0;
  let minBuyin = 0.25;

  for (let i = 0; i < bankrollSatArr.length; i++) {
    if (currentInputValue >= bankrollSatArr[i]) {
      currentBankrollBuyin = bankrollSatArr[i];
    }
  }

  let currentLimitSatBuyin = currentBankrollBuyin / 1000;

  if (currentBankrollBuyin === 0) {
    entrySatTextForbidden.classList.add('entry__sat-text-forbidden--active');

    satBuyinValue.classList.add('entry__description-text--forbidden');

    satBuyinValue.textContent = Math.floor(currentInputValue / minBuyin);

    entryBoxCostSat.style.color = '#d63838';

    entrySatValue.textContent = minBuyin;
  } else {
    entrySatTextForbidden.classList.remove('entry__sat-text-forbidden--active');

    satBuyinValue.classList.remove('entry__description-text--forbidden');

    entryBoxCostSat.style.color = '#94da25';

    satBuyinValue.textContent = Math.floor(
      currentInputValue / currentLimitSatBuyin
    );

    entrySatValue.textContent = currentLimitSatBuyin;
  }
};

setSatellitesValue();

// currentInputValue;

// Создание массива с доступными сателитами

//============================

// let satOpens = [];

// const setArrayAvailableSat = function () {
//   for (let i = 0; i < sattelitesCost.length; i++) {
//     if (currentInputValue >= sattelitesCost[i] * 1000) {
//       satOpens[i] = sattelitesCost[i];
//     }
//   }
// };

// const setLimitCashGames = function () {
//   const currentLimit = bankrollScoresCash.find((item, index) => {

//   });
// };

// setArrayAvailableSat();

//============================

bankrollInput.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    setLevelUp();
    setLevelName();
    setHeroPicture();
    changeStatusTextLevel();
    updateCurrentLevel();
    setLimitCash();
    setSatellitesValue();
  }
});

bankrollInput.addEventListener('blur', () => {
  setLevelUp();
  setLevelName();
  setHeroPicture();
  changeStatusTextLevel();
  updateCurrentLevel();
  setLimitCash();
  setSatellitesValue();
});

//  Входные данные:
// значение текущего банкролла,
// пройтись по массиву со значениями стоимости входа в сателит
// если банкролл больше item*1000, тогда сохранять значение item в массиве satOpens, иначе удалять это значение
// выводить текст: Открыта возможность играть в Sattelites с входом: function displaySattelites

// el.textContent = `Открыта возможность играть в Sattelites с входом: ${displaySattelites()}`
//

// 1 currentInputValue;
