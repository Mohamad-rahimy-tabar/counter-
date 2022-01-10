const Buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter span");

let count = 0;

Buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const classList = btn.classList;
    if (classList.contains("increment")) count++;
    else if (classList.contains("decrement")) count--;
    else count = 0;
    count > 0
      ? (counterValue.style.color = "green")
      : (counterValue.style.color = "red");
    counterValue.textContent = count;
  });
});
