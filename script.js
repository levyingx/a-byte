let numbers = [0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < numbers.length; i++) {
  document.getElementById("main-container").innerHTML +=
  `<div class="number" id="num-${i}" onclick="toggle(${i})">${numbers[i]}</div>`;
}

function calculate() {
  let index = 0;
  let result = 0;
  
  for (let i = 7; i >= 0; i--) {
    if (numbers[index] == 1) {
      result += Math.pow(2, i);
    }
    index++;
  }
  document.getElementById("result").textContent = result;
}

function toggle(index) {
  numbers[index] == 0 ? (numbers[index] = 1) : (numbers[index] = 0);
  calculate();
  document.getElementById(`num-${index}`).textContent = numbers[index];
}
