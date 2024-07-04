// Set the local storage
let counterValue = localStorage.getItem('counterValue') ? parseInt(localStorage.getItem('counterValue')) : 0;
let increaseByNumber = 1;
let memoryValue = localStorage.getItem('memoryValue') ? parseInt(localStorage.getItem('memoryValue')) : 0;

function updateCounter() {
  counterElement.textContent = counterValue;
  localStorage.setItem('counterValue', counterValue);

  decrementButton.disabled = counterValue <= 0;
  adjustFontSize();
};

function updateMemory() {
  memoryElement.textContent = memoryValue;
  localStorage.setItem('memoryValue', memoryValue);

  resetMemoryButton.disabled = memoryValue <= 0;
}