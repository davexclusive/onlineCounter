updateCounter();
hideMemory();
updateMemory();

// Event Listeners

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

adjustFontSize();