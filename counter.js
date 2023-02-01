const counter = document.querySelector('.count');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
  counter.textContent = 0;
  counter.style.color = 'black';
});

decrease.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) - 1;
  if(counter.textContent < 0){
    counter.style.color = 'red';
  }
  if(counter.textContent == 0){
    counter.style.color = 'black';
  }
});


increase.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) + 1;
  if(counter.textContent > 0){
    counter.style.color = 'green';
  }
  if(counter.textContent == 0){
    counter.style.color = 'black';
  }
});