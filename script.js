const container = document.querySelector('.js-container');
  
container.innerHTML = 
    `
    <div class="counter-value js-counter-value">0</div>
    <button class="increment-button js-increment-button">+</button>
    <button class="decrement-button js-decrement-button">-</button>
    <button class="reset-button js-reset-button">Reset</button>
    <button class="start-from-button js-start-from-button">Start from</button>
    <button class="increase-by-button js-increase-by-button">Increase by</button>
    <div class="memory-element js-memory-element">0</div>
    <button class="memory-element-button js-memory-element-button">M</button>
    <button class="reset-memory-button js-reset-memory-button">Reset M</button>


    `;
  
const counterElement = document.querySelector('.js-counter-value');
const incrementButton = document.querySelector('.js-increment-button');
const decrementButton = document.querySelector('.js-decrement-button');
const resetButton = document.querySelector('.js-reset-button');
const startFromButton = document.querySelector('.js-start-from-button');
const increaseByButton = document.querySelector('.js-increase-by-button');
const memoryElement = document.querySelector('.js-memory-element');
const memoryButton = document.querySelector('.js-memory-element-button');
const resetMemoryButton = document.querySelector('.js-reset-memory-button');


let counterValue = localStorage.getItem('counterValue') ? parseInt(localStorage.getItem('counterValue')) : 0;
let increaseByNumber = 1;
let memoryValue = localStorage.getItem('memoryValue') ? parseInt(localStorage.getItem('memoryValue')) : 0;

updateCounter();

function updateCounter() {
  counterElement.textContent = counterValue;
  localStorage.setItem('counterValue', counterValue);

  decrementButton.disabled = counterValue <= 0;
};

updateMemory();

function updateMemory() {
  memoryElement.textContent = memoryValue;
  localStorage.setItem('memoryValue', memoryValue);
}

incrementButton.addEventListener('click', () => {
  counterValue += increaseByNumber;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue -= 1;
  }  {
    updateCounter();
  }
});

resetButton.addEventListener('click', () => {
  counterValue = 0
  updateCounter();
});


startFromButton.addEventListener('click', () => {
  const startFromPromt = prompt('Please enter a value');
  const startFromNumber = parseInt(startFromPromt);
  
  if (!isNaN(startFromNumber) && increaseByNumber > 0) {
    counterValue = startFromNumber;
    updateCounter();
  } else {
    alert('Please digit a valid number');
  }
 
});


increaseByButton.addEventListener('click', () => {
  const promtValue = prompt('Please enter a value');
  const increaseNumber = parseInt(promtValue, 10);

  if (!isNaN(increaseNumber) && increaseNumber > 0) {
    increaseByNumber = increaseNumber;

  } else {
    alert('Please digit a valid number');
  }
});

memoryButton.addEventListener('click', () => {
  memoryValue = counterValue;
  updateMemory();
})

resetMemoryButton.addEventListener('click', () => {
  memoryValue = 0;
  updateMemory();
});