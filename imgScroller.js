const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');
const title = document.querySelector('.Title');

let slideNum = 1;
const length = images.length;

title.innerHTML = `1 / ${length}`;

for(let i = 0; i < length; i++){
  const div = document.createElement('div');
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = 'transparent';
  });
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    resetBg();
    slider.style.transform = `translateX(-${index * 800}px)`;
    buttons[index].style.backgroundColor = 'white';
    title.innerHTML = `${index+1} / ${length}`;
  });
});


const nextSlide = () => {
  resetBg();
  slider.style.transform = `translateX(-${800 * slideNum}px)`;
  buttons[slideNum].style.backgroundColor = 'white';
  title.innerHTML = `${slideNum + 1} / ${length}`;
  slideNum++;
};

const prevSlide = () => {
  resetBg();
  slider.style.transform = `translateX(-${800 * (slideNum-2)}px)`;
  buttons[slideNum-2].style.backgroundColor = 'white';
  title.innerHTML = `${slideNum-1} / ${length}`;
  slideNum--;
};

const getFirstSlide = () => {
  resetBg();
  slider.style.transform = `translateX(0px)`;
  buttons[0].style.backgroundColor = 'white';
  title.innerHTML = `1 / ${length}`;
  slideNum = 1;
}

const getLastSlide = () => {
  resetBg();
  slider.style.transform = `translateX(-${800 * (length - 1)}px)`;
  buttons[length - 1].style.backgroundColor = 'white';
  title.innerHTML = `${length} / ${length}`;
  slideNum = length;
};

right.addEventListener('click', () =>{
  slideNum < length ? nextSlide() : getFirstSlide();
});

left.addEventListener('click', () =>{
  slideNum > 1 ? prevSlide() : getLastSlide();
});