// Functions 

function adjustFontSize() {
  let value = counterElement.textContent;
  let fontSize = 120;

  if (value.length > 3) {
    fontSize = 120 - (value.length - 3) * 20;
    if (fontSize < 40) fontSize = 40;
  }

  counterElement.style.fontSize = fontSize + 'px';
}

function hideMemory () {
  if (memoryValue === 0) {
    document.querySelector('.js-memory-element').style.visibility = 'hidden';
  } else {
    document.querySelector('.js-memory-element').style.visibility = 'visible';
  }
}