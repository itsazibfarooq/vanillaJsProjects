const palette = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const colorCode = document.querySelector('.color');
const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += `${palette[Math.floor(Math.random() * 16)]}`;
  }
  console.log(color);
  body.style.backgroundColor = color;
  colorCode.textContent = color;
  colorCode.style.color = color;
});
