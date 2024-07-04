const container = document.querySelector('.js-container');
  
// Creation of the HTML
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

// Select the DOM elements
const counterElement = document.querySelector('.js-counter-value');
const incrementButton = document.querySelector('.js-increment-button');
const decrementButton = document.querySelector('.js-decrement-button');
const resetButton = document.querySelector('.js-reset-button');
const startFromButton = document.querySelector('.js-start-from-button');
const increaseByButton = document.querySelector('.js-increase-by-button');
const memoryElement = document.querySelector('.js-memory-element');
const memoryButton = document.querySelector('.js-memory-element-button');
const resetMemoryButton = document.querySelector('.js-reset-memory-button');