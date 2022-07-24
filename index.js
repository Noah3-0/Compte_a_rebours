const form = document.getElementById("form");
const choice = document.getElementById("choice");
let minutes = 1;
let totalSeconds = 0;
let seconds = 1;

console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  minutes = Math.floor(totalSeconds / 60);
  seconds = totalSeconds % 60;
  countdownDisplay.textContent = `${minutes} : ${seconds}`;
  const loop = () => {
    if (seconds === 0 && minutes >= 1) {
      minutes--;
      seconds = 59;
      countdownDisplay.textContent = `${minutes} : ${seconds}`;
    } else if (seconds <= 59) {
      seconds--;
      countdownDisplay.textContent = `${minutes} : ${seconds}`;
    }
    // form.innerHTML = `<h1>FIN</h1>`;
  };

  setInterval(() => {
    loop();
  }, 1000);
});

// Créer la logique de compte à rebours
// Créer un événement à la validation du form pour lancer le compte à rebours

// choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60
