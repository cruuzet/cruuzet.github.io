const targetDate = new Date("2025-11-15T10:00:00+01:00");

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  note: document.getElementById("note"),
};

const padNumber = (value) => String(value).padStart(2, "0");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timerInterval);
    elements.days.textContent = "00";
    elements.hours.textContent = "00";
    elements.minutes.textContent = "00";
    elements.seconds.textContent = "00";
    elements.note.textContent = "The wait is over!";
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  elements.days.textContent = padNumber(days);
  elements.hours.textContent = padNumber(hours);
  elements.minutes.textContent = padNumber(minutes);
  elements.seconds.textContent = padNumber(secs);
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);