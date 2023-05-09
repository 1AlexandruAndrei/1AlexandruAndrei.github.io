function countDownTimer(duration, displayElement) {
    let timeLeft = duration;
    let interval = setInterval(() => {
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft - hours * 3600) / 60);
        let seconds = timeLeft % 60;

        displayElement.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (--timeLeft < 0) {
            clearInterval(interval);
            displayElement.textContent = "Time's up!";
        }
    }, 1000);
}

const timerElement = document.getElementById('timer');
countDownTimer(24 * 60 * 60, timerElement);
