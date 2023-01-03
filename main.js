const textAreaEl = document.getElementById("text-area");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCounterEl.innerText = textAreaEl.value.length;
  remainingCounterEl.innerText =
    textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
}
