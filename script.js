const container = document.querySelector('.js-container');
  
container.innerHTML = 
    `
    <div class="counter-value js-counter-value">0</div>
    <button class="increment-button js-increment-button">+</button>
    <button class="decrement-button js-decrement-button">-</button>
    <button class="reset-button js-reset-button">Reset</button>
    <button class="start-from-button js-start-from-button">Start from</button>
    <button class="increase-by-button js-increase-by-button">Increase by</button>

    `;
  
const counterElement = document.querySelector('.js-counter-value');
const incrementButton = document.querySelector('.js-increment-button');
const decrementButton = document.querySelector('.js-decrement-button');
const resetButton = document.querySelector('.js-reset-button');


let counterValue = localStorage.getItem('counterValue') ? parseInt(localStorage.getItem('counterValue')) : 0;

updateCounter();

function updateCounter() {
  counterElement.textContent = counterValue;
  localStorage.setItem('counterValue', counterValue);

  decrementButton.disabled = counterValue <= 0;
}

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounter();
})

decrementButton.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue -= 1;
  }  {
    updateCounter();
  }
})

resetButton.addEventListener('click', () => {
  counterValue = 0
  updateCounter();
})


//document.querySelector('.js-increment-button')
//  .addEventListener('click', () => {
//    counterValue += 1;
//  })