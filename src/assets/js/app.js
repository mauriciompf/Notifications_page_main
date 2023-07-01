const markAllItems = document.querySelector("[data-button='button']");
const items = Array.from(document.querySelectorAll("[data-item='item']"));
const textMessages = Array.from(document.querySelectorAll(".message__text"));
const countNumbers = document.querySelector("[data-number='count']");

window.addEventListener("DOMContentLoaded", () => {
  countNumbers.textContent = items.length;

  textMessages.forEach((text) => {
    const ballsRed = document.createElement("span");
    ballsRed.className = "span";
    text.appendChild(ballsRed);
  });

  items.forEach((item) => {
    item.classList.add("active");
  });
});

markAllItems.addEventListener("click", () => {
  const balls = [];
  items.forEach((item) => {
    item.classList.remove("active");
    balls.push(...item.querySelectorAll(".span"));
  });

  balls.forEach((ball) => {
    ball.style.display = "none";
  });

  countNumbers.textContent = 0;
});
