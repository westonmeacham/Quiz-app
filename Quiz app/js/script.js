const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerText = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
        if (option.innerText === correctAnswer) {
            option.classList.add('correct');
        } else if (option.innerText === selectedOption) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });

    if (selectedOption === correctAnswer) {
        score++;
    }

    document.getElementById('next-button').disabled = false;
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<h3>Your score: ${score}/${questions.length}</h3>`;
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('next-button').disabled = true;
    } else {
        showResult();
    }
});

// Initialize the quiz
displayQuestion();
document.getElementById('next-button').disabled = true;