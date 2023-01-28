const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const correct = document.querySelector('.correct');
const wrong = document.querySelector('.wrong');
const score = document.querySelector('.score');
const play = document.querySelector('.play');

let qIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let total = 0;
let selectedAnswer;


const showQuestion = (qNumber) => {
  if(qIndex === data.length){
    return showResult();
  }
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML =  data[qNumber].answers.map((item,index) => 
    `<div class="answer">
        <input name="answer" type="radio" id=${index } value=${item.isCorrect}>
        <label for="1">${item.answer}</label>
    </div>`
    ).join("");
    
    selectAnswer();
};
  
const selectAnswer = () => {
  answersContainer.querySelectorAll('input').forEach((e) => {
    e.addEventListener('click', () => {
      selectedAnswer = e.value;
    })
  })
};

const submitAnswer = ()=>{
  submit.addEventListener('click', ()=>{
    if(selectedAnswer !== null){
      selectedAnswer == 'true' ? correctAnswers++ : wrongAnswers++;
      qIndex++;
      showQuestion(qIndex);
    }
    else{
      alert('Select an Option');
    }
  })
};

const showResult = ()=>{
  resultScreen.style.display = 'block';
  gameScreen.style.display = 'none';
  correct.textContent = `Correct Answers : ${correctAnswers}`;
  wrong.textContent = `Wrong Answers : ${wrongAnswers}`;
  total = correctAnswers*10;
  score.textContent = `Score : ${total}`;
};

play.addEventListener('click', ()=>{
  resultScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  qIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  total = 0;
  showQuestion(0);
});

showQuestion(qIndex);
submitAnswer();





