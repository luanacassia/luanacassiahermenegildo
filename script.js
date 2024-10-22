// script.js
const questions = [
    {
        question: "Qual é a palavra mais longa da Língua Portuguesa?",
        answers: [
            { text: "Anticonstitucionalissimamente", correct: true },
            { text: "Paralelepípedo", correct: false },
            { text: "Inconstitucionalidade", correct: false },
            { text: "Proparoxítona", correct: false }
        ]
    },
    {
        question: "Quantas letras possui o alfabeto português?",
        answers: [
            { text: "26", correct: true },
            { text: "27", correct: false },
            { text: "29", correct: false },
            { text: "30", correct: false }
        ]
    },
    {
        question: "Qual expressão significa 'não há problema'?",
        answers: [
            { text: "De boa", correct: true },
            { text: "A mil", correct: false },
            { text: "Na moral", correct: false },
            { text: "De leve", correct: false }
        ]
    },
    {
        question: "Qual destas palavras é um exemplo de onomatopéia?",
        answers: [
            { text: "Sussurro", correct: false },
            { text: "Cai", correct: false },
            { text: "Pum", correct: true },
            { text: "Rápido", correct: false }
        ]
    },
    {
        question: "A palavra 'saudade' tem origem em qual língua?",
        answers: [
            { text: "Latim", correct: true },
            { text: "Árabe", correct: false },
            { text: "Tupi", correct: false },
            { text: "Grego", correct: false }
        ]
    },
    {
        question: "O que é um 'cognato'?",
        answers: [
            { text: "Palavra semelhante em idiomas diferentes", correct: true },
            { text: "Palavra com significado oposto", correct: false },
            { text: "Palavra que não existe", correct: false },
            { text: "Palavra em desuso", correct: false }
        ]
    },
    {
        question: "Qual é a origem da palavra 'abacaxi'?",
        answers: [
            { text: "Tupi", correct: true },
            { text: "Grego", correct: false },
            { text: "Latim", correct: false },
            { text: "Espanhol", correct: false }
        ]
    },
    {
        question: "Qual é o significado da expressão 'dar uma mãozinha'?",
        answers: [
            { text: "Ajudar", correct: true },
            { text: "Empurrar", correct: false },
            { text: "Ignorar", correct: false },
            { text: "Entrar em conflito", correct: false }
        ]
    },
    {
        question: "Em que ano foi feita a primeira reforma ortográfica em Portugal?",
        answers: [
            { text: "1900", correct: false },
            { text: "1945", correct: false },
            { text: "1911", correct: true },
            { text: "2008", correct: false }
        ]
    },
    {
        question: "Qual destas palavras é um exemplo de um adjetivo?",
        answers: [
            { text: "Correr", correct: false },
            { text: "Feliz", correct: true },
            { text: "Casa", correct: false },
            { text: "Rápido", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 10;

const quizContainer = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const scoreContainer = document.getElementById('scoreContainer');
const scoreDisplay = document.getElementById('score');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 20;
    nextBtn.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    quizContainer.innerHTML = '';
    const questionElement = document.createElement('h2');
    questionElement.innerText = question.question;
    quizContainer.appendChild(questionElement);
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        quizContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showScore() {
    nextBtn.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreDisplay.innerText = `${score} de ${questions.length}`;
}

function restartQuiz() {
    startQuiz();
}

// Iniciar o quiz
startQuiz();
