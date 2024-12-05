const quizData = [
    {
        question: "What is the average lifespan of a dog?",
        options: ["5-8 years", "10-13 years", "15-20 years", "Over 20 years"],
        answer: "10-13 years"
    },
    {
        question: "Which sense is the most developed in dogs?",
        options: ["Hearing", "Sight", "Smell", "Touch"],
        answer: "Smell"
    },
    {
        question: "What breed is known for its blue-black tongue?",
        options: ["Siberian Husky", "Chow Chow", "Dalmatian", "Akita"],
        answer: "Chow Chow"
    },
    {
        question: "What is the fastest dog breed?",
        options: ["Greyhound", "Border Collie", "Boxer", "Doberman Pinscher"],
        answer: "Greyhound"
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    quizData.forEach((item, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question-block");

        questionElement.innerHTML = `
            <h3>${index + 1}. ${item.question}</h3>
            ${item.options
                .map(
                    (option) =>
                        `<label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label><br>`
                )
                .join("")}
        `;

        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(
            `input[name="question${index}"]:checked`
        );
        if (selectedOption && selectedOption.value === item.answer) {
            score++;
        }
    });
    resultContainer.textContent = `You scored ${score} out of ${quizData.length}!`;
}

// Load quiz on page load
loadQuiz();

// Handle quiz submission
submitButton.addEventListener("click", calculateScore);