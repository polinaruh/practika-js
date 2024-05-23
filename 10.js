let predictions = [
    { text: 'Стремитесь к успеху и выглядите так, словно вы его уже достигли.', type: 'good' },
    { text: 'Стоя на месте, двигаться можно только назад.', type: 'bad' },
    { text: 'Не стоит тратить время и силы на мелочи, нужно думать о главном.', type: 'good' },
    { text: 'Не ожидайте слишком многого и не думайте о конечном результате.', type: 'bad' },
];

let timerElement = document.getElementById('timer');
let textElement = document.getElementById('text');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

let predictionTimer;
let predictionIndex;

startButton.addEventListener('click', () => {
    startButton.classList.remove('active');
    stopButton.classList.add('active');

    predictionTimer = setInterval(function() {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        timerElement.textContent = randomNumber;
    }, 100);
});
stopButton.addEventListener('click', () => {
    stopButton.classList.remove('active');
    clearInterval(predictionTimer);

    let randomNumber = parseInt(timerElement.textContent);
    predictionIndex = randomNumber % predictions.length;

    displayPrediction();
});

function displayPrediction() {
    let prediction = predictions[predictionIndex];
    textElement.textContent = prediction.text;
    textElement.className = prediction.type;
    hideButtons();
}

function hideButtons() {
    startButton.style.display = 'none';
    stopButton.style.display = 'none';
}