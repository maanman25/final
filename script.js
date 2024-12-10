"use strict";

// Game variables
let currentQuestionIndex = 0;
let score = 0;

// Questions array
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    correct: 0
  },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    options: ["<script src='script.js'>", "<script href='script.js'>", "<script ref='script.js'>", "<script name='script.js'>"],
    correct: 0
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
    correct: 3
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    correct: 1
  },
  {
    question: "Which is the correct CSS syntax?",
    options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
    correct: 2
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
    correct: 0
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: ["call myFunction()", "call function myFunction()", "myFunction()", "Call.myFunction()"],
    correct: 2
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i == 5 then", "if i = 5 then", "if (i == 5)", "if i = 5"],
    correct: 2
  }
];

// DOM elements
const questionTitle = document.getElementById("question-title");
const answersContainer = document.querySelector(".options");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

// Functions
function loadQuestion() {
  // Clear previous answers
  answersContainer.innerHTML = "";

  // Load current question
  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;

  // Add answer options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("div");
    button.textContent = option;
    button.className = "option";
    button.addEventListener("click", () => checkAnswer(index));
    answersContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong answer!");
  }

  // Update score
  scoreDisplay.textContent = score;

  // Enable the next button
  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextButton.disabled = true;
  } else {
    endGame();
  }
});

function endGame() {
  alert("Quiz over! Your score is " + score);
}

// Load the first question
loadQuestion();
