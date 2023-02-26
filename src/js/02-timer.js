import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let selectedDate = null;
let timerId = null;
let timeLeft = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < new Date().getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future.', {
        timeout: 1500,
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

const myInput = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const timerWrap = document.querySelector('.timer');
timerWrap.style.fontSize = '30px';
timerWrap.style.display = 'flex';
timerWrap.style.justifyContent = 'center';
timerWrap.style.gap = '30px';
timerWrap.style.marginTop = '20px';
timerWrap.style.textShadow = '1px 1px 2px black, 0 0 25px red, 0 0 5px blue';

const fp = flatpickr(myInput, options);

startBtn.addEventListener('click', onStart);
startBtn.disabled = true;

function onStart() {
  timerId = setInterval(() => {
    timeLeft = selectedDate.getTime() - new Date().getTime();
    if (timeLeft <= 1000) {
      clearInterval(timerId);
    }
    daysSpan.textContent = addLeadingZero(convertMs(timeLeft).days);
    hoursSpan.textContent = addLeadingZero(convertMs(timeLeft).hours);
    minutesSpan.textContent = addLeadingZero(convertMs(timeLeft).minutes);
    secondsSpan.textContent = addLeadingZero(convertMs(timeLeft).seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  }
  return value;
}
