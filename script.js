const spinnerScreen = document.getElementById("spinnerScreen");
const captchaBox = document.getElementById("captchaBox");
const fakeCheckbox = document.getElementById("fakeCheckbox");
const challengeContainer = document.getElementById("challengeContainer");
const nextButton = document.getElementById("nextButton");
const unavailableScreen = document.getElementById("unavailableScreen");

let step = 0;

window.onload = () => {
  setTimeout(() => {
    spinnerScreen.classList.add("hidden");
    captchaBox.classList.remove("hidden");
  }, 2000);
};

fakeCheckbox.addEventListener("click", () => {
  fakeCheckbox.style.backgroundColor = "#0f0";
  fakeCheckbox.style.borderColor = "#0f0";
  startChallenge();
});

function startChallenge() {
  challengeContainer.classList.remove("hidden");
  showNextStep();
}

function showNextStep() {
  const challenges = [
    "Select all images with traffic lights. (But there are none!)",
    "Solve this equation: 15 + 32 x 2 - (12 / 3)",
    "Find the missing number in the sequence: 2, 4, 8, ?, 32",
    "Rearrange the letters: 'CAPTHCA' to form a real word.",
    "What is the square root of 3249?",
    "Find X: 3x + 2 = 17",
    "Translate: 'Je ne suis pas un robot.'",
    "How many triangles are in this image? (No image provided.)"
  ];

  if (step < challenges.length) {
    challengeContainer.innerHTML = `<div class="challenge"><strong>Challenge ${step + 1}:</strong> ${challenges[step]}</div>`;
    nextButton.classList.remove("hidden");
    step++;
  } else {
    finishCaptcha();
  }
}

nextButton.addEventListener("click", () => {
  showNextStep();
});

function finishCaptcha() {
  captchaBox.classList.add("hidden");
  spinnerScreen.classList.remove("hidden");

  setTimeout(() => {
    spinnerScreen.classList.add("hidden");
    unavailableScreen.classList.remove("hidden");
  }, 2000);
}
