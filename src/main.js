const futureDate = new Date(2021, 4, 9, 6, 33);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = futureDate.getMonth();
const day = futureDate.getDay();
const date = futureDate.getDate();
//get future time in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const timeRemaining = futureTime - today; //? in miliseconds

  //? 1s =1000ms
  //? 1m = 60s
  //? 1hr = 60min
  //? 1day = 24hr

  //values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  const remainingDays = Math.floor(timeRemaining / oneDay);
  const remainingHours = Math.floor((timeRemaining % oneDay) / oneHour);
  const remainingMinutes = Math.floor((timeRemaining % oneHour) / oneMin);
  const remainingSeconds = Math.floor((timeRemaining % oneMin) / 1000);

  const values = [remainingDays, remainingHours, remainingMinutes, remainingSeconds];

  window.addEventListener('DOMContentLoaded', () => {
    updateMinutes(remainingMinutes, true);
    updateHours(remainingHours, true);
    updateDays(remainingDays, true);
  });
  updateSeconds(remainingSeconds);
  if (remainingSeconds === 59) {
    updateMinutes(remainingMinutes, true);
  }
  if (remainingMinutes === 59) {
    updateHours(remainingHours, true);
  }

  if (remainingHours === 59) {
    updateDays(remainingDays, true);
  }

  if (timeRemaining < 0) {
    clearInterval(countdown);
  }
}

function updateDays(val, update) {
  const card = document.querySelector('.days');
  const cardTop = document.querySelector('.days .card-top');
  const cardBottom = document.querySelector('.days .card-bottom');
  const cardBack = document.querySelector('.days .card-back');
  const backBottom = document.querySelector('.days .card-back .card-bottom');
  val = ('0' + val).slice(-2);
  if (update === true) {
    card.classList.remove('flip');
    void card.offsetWidth;
    card.classList.add('flip');
  }
  cardTop.textContent = val;
  cardBack.setAttribute('data-value', val);
  cardBottom.setAttribute('data-value', val);
  backBottom.setAttribute('data-value', val);
}

function updateSeconds(val) {
  const card = document.querySelector('.seconds');
  const cardTop = document.querySelector('.seconds .card-top');
  const cardBottom = document.querySelector('.seconds .card-bottom');
  const cardBack = document.querySelector('.seconds .card-back');
  const backBottom = document.querySelector('.seconds .card-back .card-bottom');
  val = ('0' + val).slice(-2);
  card.classList.remove('flip');
  void card.offsetWidth;
  card.classList.add('flip');

  cardTop.textContent = val;
  cardBack.setAttribute('data-value', val);
  cardBottom.setAttribute('data-value', val);

  backBottom.setAttribute('data-value', val);
}

function updateMinutes(val, update) {
  const card = document.querySelector('.minutes');
  const cardTop = document.querySelector('.minutes .card-top');
  const cardBottom = document.querySelector('.minutes .card-bottom');
  const cardBack = document.querySelector('.minutes .card-back');
  const backBottom = document.querySelector('.minutes .card-back .card-bottom');
  if (update === true) {
    card.classList.remove('flip');
    void card.offsetWidth;
    card.classList.add('flip');
  }
  val = ('0' + val).slice(-2);

  cardTop.textContent = val;
  cardBack.setAttribute('data-value', val);
  cardBottom.setAttribute('data-value', val);

  backBottom.setAttribute('data-value', val);
}

function updateHours(val, update) {
  const card = document.querySelector('.hours');
  const cardTop = document.querySelector('.hours .card-top');
  const cardBottom = document.querySelector('.hours .card-bottom');
  const cardBack = document.querySelector('.hours .card-back');
  const backBottom = document.querySelector('.hours .card-back .card-bottom');
  if (update === true) {
    card.classList.remove('flip');
    void card.offsetWidth;
    card.classList.add('flip');
  }
  val = ('0' + val).slice(-2);

  cardTop.textContent = val;
  cardBack.setAttribute('data-value', val);
  cardBottom.setAttribute('data-value', val);

  backBottom.setAttribute('data-value', val);
}

getRemainingTime(); // sets remaining time on page load
let countdown = setInterval(getRemainingTime, 1000);
