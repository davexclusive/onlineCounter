const container = document.querySelector('.js-container');
  
// Creation of the HTML of the counter
container.innerHTML = 
    `
    <div class="counter-value js-counter-value">0</div>

    <div class="plus-minus-button">
      <button class="increment-button js-increment-button">+</button>
      <button class="decrement-button js-decrement-button">-</button>
    </div>

    <div class="reset-row">
      <button class="reset-button js-reset-button">Reset</button>
    </div>

    <div class="mod-button">
      <button class="start-from-button js-start-from-button">Start from</button>
      <button class="increase-by-button js-increase-by-button">Increase by</button>
    </div>

    

    <div class="mod-button">
      <div class="memory-element js-memory-element">0</div>
      <button class="memory-element-button js-memory-element-button">M</button>
      <button class="reset-memory-button js-reset-memory-button">Reset M</button>
    </button>

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

// Set the local storage to save the values after reload
let counterValue = localStorage.getItem('counterValue') ? parseInt(localStorage.getItem('counterValue')) : 0;
let increaseByNumber = 1;
let memoryValue = localStorage.getItem('memoryValue') ? parseInt(localStorage.getItem('memoryValue')) : 0;

updateCounter();
hideMemory();

// Function to display the value of the counter
function updateCounter() {
  counterElement.textContent = counterValue;
  localStorage.setItem('counterValue', counterValue);

  decrementButton.disabled = counterValue <= 0;
  adjustFontSize();
};

updateMemory();

function updateMemory() {
  memoryElement.textContent = memoryValue;
  localStorage.setItem('memoryValue', memoryValue);

  resetMemoryButton.disabled = memoryValue <= 0;
}

// Function to adapt the font size of the counter
function adjustFontSize() {
  let value = counterElement.textContent;
  let fontSize = 120;

  if (value.length > 3) {
    fontSize = 120 - (value.length - 3) * 20;
    if (fontSize < 40) fontSize = 40;
  }

  counterElement.style.fontSize = fontSize + 'px';
}

//Creation of Buttons 

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
  let resetQu = confirm('Are you sure you want to reset counter and settings?');
   if (resetQu == true) { 
  counterValue = 0;
  increaseByNumber = 1;
  updateCounter();
  } 
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
  hideMemory();
})

resetMemoryButton.addEventListener('click', () => {
  resetQu = confirm('Are you sure you want to reset the memory?');
  if (resetQu == true) {
  memoryValue = 0;
  updateMemory();
  hideMemory();
  }
});

//Function to hide the memory value if is 0
function hideMemory () {
  if (memoryValue === 0) {
    document.querySelector('.js-memory-element').style.visibility = 'hidden';
  } else {
    document.querySelector('.js-memory-element').style.visibility = 'visible';
  }
}

adjustFontSize();
