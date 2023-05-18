document.addEventListener('DOMContentLoaded', function () {
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
});

///--------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    button.addEventListener('click', changeStyle);
});

function changeStyle() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const element = document.getElementById('myElement');
    element.classList.add('styled-element');
    element.textContent = randomNumber;
    element.classList.add('styled-element');
    element.textContent = randomNumber;

}

