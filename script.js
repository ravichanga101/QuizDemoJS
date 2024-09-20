// Array of question objects
const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Rome"],
    correct: "Paris",
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5"],
    correct: "4",
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Jupiter", "Saturn"],
    correct: "Jupiter",
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
    correct: "William Shakespeare",
  },
  {
    question: "What is the boiling point of water?",
    answers: ["90°C", "100°C", "110°C"],
    correct: "100°C",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Gold", "Silver"],
    correct: "Oxygen",
  },
  {
    question: "What is the speed of light?",
    answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s"],
    correct: "300,000 km/s",
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    answers: ["Brazil", "France", "Germany"],
    correct: "France",
  },
  {
    question: "What is the square root of 64?",
    answers: ["6", "8", "10"],
    correct: "8",
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
    correct: "Leonardo da Vinci",
  },
];

const quizContainer = document.getElementById("quiz");

// Function to generate quiz
function loadQuiz() {
  quizData.forEach((currentQuestion, questionIndex) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-container");

    const questionText = document.createElement("p");
    questionText.textContent = `${questionIndex + 1}. ${
      currentQuestion.question
    }`;

    questionText.classList.add("question-text");

    questionDiv.appendChild(questionText);

    currentQuestion.answers.forEach((answer) => {
      const answerLabel = document.createElement("label");
      answerLabel.textContent = answer;

      const answerInput = document.createElement("input");
      answerInput.type = "radio";
      answerInput.name = `q${questionIndex}`;
      answerInput.value = answer;

      questionDiv.appendChild(answerInput);
      questionDiv.appendChild(answerLabel);
      questionDiv.appendChild(document.createElement("br"));
    });

    quizContainer.appendChild(questionDiv);

    quizContainer.appendChild(document.createElement("hr"));
  });
}

// Call the function to load the quiz
// loadQuiz(););
document.addEventListener("DOMContentLoaded", loadQuiz);

const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

// Function to check the answers
function checkAnswers() {
  let score = 0;
  let passingScore = 4;

  quizData.forEach((currentQuestion, questionIndex) => {
    const selectedAnswer = document.querySelector(
      `input[name="q${questionIndex}"]:checked`
    );

    if (selectedAnswer && selectedAnswer.value === currentQuestion.correct) {
      score++;
    }
  });

  if (score >= passingScore) {
    resultContainer.style.color = "green";
    resultText = `Congratulations! You passed the quiz with a score of ${score} out of ${quizData.length}!`;
  } else {
    resultContainer.style.color = "red";
    resultText = `You failed the quiz with a score of ${score} out of ${quizData.length}!`;
  }
  // Display the result

  resultContainer.textContent = resultText;
}

// Add event listener to the submit button
submitBtn.addEventListener("click", checkAnswers);

// this is js comment
