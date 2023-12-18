
// JavaScript for Quiz Application

// Example format for quiz questions and answers
const questions = [
    {
        question: "What is 2+2?",
        choices: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Rome"],
        answer: 2
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

// Function to load a question
function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    for (let i = 0; i < 4; i++) {
        document.getElementById('choice' + i).textContent = q.choices[i];
        document.getElementById('btn' + i).onclick = function() { chooseAnswer(i, q.answer); };
    }
    document.getElementById('progress').textContent = 'Question ' + (currentQuestion + 1) + ' of ' + questions.length;
}

// Function to handle answer selection
function chooseAnswer(choice, correctAnswer) {
    if (choice === correctAnswer) {
        score++;
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        displayScore();
    }
}

// Function to display the score at the end
function displayScore() {
    document.getElementById('quiz').innerHTML = '<h1>Your Score: ' + score + '/' + questions.length + '</h1><br><h2>' +
        'Percentage: ' + (score / questions.length * 100).toFixed(2) + '%</h2>';
}

// Load the first question
window.onload = function() {
    loadQuestion();
};
