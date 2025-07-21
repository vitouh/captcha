let gameIndex = 0;
let mistakes = 0;
const maxMistakes = 15;

const games = [
  {
    prompt: "What is 2 + 2?",
    answer: "4"
  },
  {
    prompt: "Type the word 'captcha'",
    answer: "captcha"
  },
  {
    prompt: "What is the reversed voice saying? (Hint: reversed)",
    answer: "reversed"
  },
  {
    prompt: "Spell 'banana' backwards.",
    answer: "ananab"
  },
  {
    prompt: "Type what you see in the image.",
    image: "recaptcha.png",
    answer: "apple"
  },
  {
    prompt: "Quick! What's the capital of France?",
    answer: "paris"
  },
  {
    prompt: "Decode this: 01010000 (ASCII binary)",
    answer: "P"
  },
  {
    prompt: "Final Question: Type 'Ultra Real'",
    answer: "ultra real"
  }
];

function loadGame() {
  const container = document.getElementById("game-container");
  const feedback = document.getElementById("feedback");
  feedback.innerText = "";

  if (mistakes >= maxMistakes) {
    window.location.href = "access_denied.png";
    return;
  }

  if (gameIndex >= games.length) {
    window.location.href = "404.png";
    return;
  }

  const game = games[gameIndex];
  container.innerHTML = "";

  const prompt = document.createElement("p");
  prompt.textContent = game.prompt;
  container.appendChild(prompt);

  if (game.image) {
    const img = document.createElement("img");
    img.src = game.image;
    container.appendChild(img);
  }

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Your answer...";
  container.appendChild(input);

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkAnswer(input.value.trim().toLowerCase());
    }
  });
}

function checkAnswer(userInput) {
  const correct = games[gameIndex].answer.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userInput === correct) {
    gameIndex++;
    feedback.innerText = "✅ Correct!";
  } else {
    mistakes++;
    feedback.innerText = `❌ Wrong! Mistakes: ${mistakes}/${maxMistakes}`;
  }

  setTimeout(loadGame, 1000);
}

window.onload = loadGame;
