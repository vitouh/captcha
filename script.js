window.onload = function () {
  // Show loading spinner for 3 seconds
  setTimeout(() => {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("captchaBox").style.display = "flex";
  }, 3000);
};

document.getElementById("fakeCheckbox").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("captchaBox").style.display = "none";
    document.getElementById("imageGrid").style.display = "block";
    loadImages();
  }
});

function loadImages() {
  const grid = document.getElementById("gridContainer");
  grid.innerHTML = "";

  for (let i = 1; i <= 9; i++) {
    const img = document.createElement("img");
    img.src = `assets/bus${i}.jpg`;
    img.addEventListener("click", () => {
      img.classList.toggle("selected");
    });
    grid.appendChild(img);
  }
}

document.getElementById("verifyBtn").addEventListener("click", () => {
  const selected = document.querySelectorAll(".grid img.selected").length;
  const error = document.getElementById("errorMsg");

  // Always fail, because it's a troll
  if (selected < 3 || selected > 6) {
    error.textContent = "Please try again.";
  } else {
    error.textContent = "Still not correct. Try again.";
  }
});
