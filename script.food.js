const quizData = [
    {
        question: "Which fruit is known as the king of fruits?",
        options: ["Apple", "Banana", "Mango", "Orange"],
        answer: "Mango"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Cucumber", "Lime"],
        answer: "Avocado"
    },
    {
        question: "Which spice is the most expensive in the world?",
        options: ["Saffron", "Vanilla", "Cinnamon", "Cardamom"],
        answer: "Saffron"
    },
    {
        question: "What is tofu made from?",
        options: ["Wheat", "Rice", "Soybeans", "Corn"],
        answer: "Soybeans"
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