
const questions = [
  {
    question: "Vilket landslag vann det första fotbolls-VM?",
    options: ["Uruguay", "Brasilien", "England"],
    answer: "Uruguay"
  },
  {
    question: "Vilken fotbollsspelare har vunnit flest Ballon d'Or?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Johan Cruyff"],
    answer: "Lionel Messi"
  },
  {
    question: "Vilken är den mest värdefulla fotbollsklubben i Premier League?",
    options: ["Manchester United", "Liverpool", "Chelsea"],
    answer: "Manchester United"
  },
  {
    question: "Hur många gula kort får en spelare ta innan han får en matchavstängning?",
    options: [5, 4, 6],
    answer: 5
  },
  {
    question: "Hur många olika länder har vunnit fotbolls-VM?",
    options: [10, 12, 8],
    answer: 8
  }
];

let currentQuestionIndex = 0;
let score = 0;
const rootElement = document.getElementById("root");

function startGame() {
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showSummary();
    return;
  }

  const question = questions[currentQuestionIndex];
  rootElement.innerHTML = `
    <div class="question">${question.question}</div>
    <div class="options">
      ${question.options.map((option) => `
        <button class="btn btn-custom w-full mb-2" onclick="checkAnswer('${option}', '${question.answer}')">${option}</button>
      `).join('')}
    </div>
    <div class="feedback"></div>
  `;
}

function checkAnswer(selectedAnswer, correctAnswer) {
  const feedback = document.querySelector(".feedback");

  if (selectedAnswer === correctAnswer) {
    score++;
    feedback.textContent = "Rätt!";
    feedback.classList.add("correct");
    feedback.classList.remove("incorrect");
  } else {
    feedback.textContent = "Fel!";
    feedback.classList.add("incorrect");
    feedback.classList.remove("correct");
  }

  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 1500);
}

function showSummary() {
  rootElement.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Spelet är slut!</h2>
    <p class="text-xl">Din totalpoäng är: ${score}</p>
    <button onclick="restartGame()" class="btn btn-primary mt-4">Spela igen</button>
  `;
}

function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  startGame();
}

startGame();
