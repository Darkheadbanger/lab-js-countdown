const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let startBtn = document.getElementById("start-btn");
let timeElement = document.getElementById("time");

let timeCountdown = Number(timeElement.textContent);
let countDownInterval = 0;

// ITERATION 1: Add event listener to the start button

startBtn.addEventListener("click", (event) => {
  startBtn.disabled = true;
  startCountdown();
});

// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
  countDownInterval = setInterval(() => {
    timeCountdown--;
    timeElement.textContent = timeCountdown;

    if (timeCountdown <= 0) {
      showToast();
      clearInterval(countDownInterval);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
