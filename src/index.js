const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const closeToastBtn = document.getElementById("close-toast");

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Disable the start button during countdown
  startButton.disabled = true;

  // Reset remainingTime
  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;

  // Start the countdown
  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false; // Re-enable button
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastMessage.textContent = message;
  toast.classList.add("show");

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: Toast Close Button
  closeToastBtn.addEventListener("click", () => {
    toast.classList.remove("show");
  });
}
