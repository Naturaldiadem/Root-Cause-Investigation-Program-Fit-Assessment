/* ==========================================
   NATURAL DIADEM
   PROGRAM FIT ASSESSMENT
   Main Application
========================================== */

// -------------------------
// Application State
// -------------------------

let currentQuestion = 0;

let answers = {};

// -------------------------
// DOM Elements
// -------------------------

const welcomeScreen = document.getElementById("welcome-screen");
const assessment = document.getElementById("assessment");
const reviewScreen = document.getElementById("review-screen");
const resultsScreen = document.getElementById("results-screen");

const questionContainer = document.getElementById("question-container");
const reviewContainer = document.getElementById("review-container");
const resultsContent = document.getElementById("results-content");

const beginBtn = document.getElementById("begin-btn");
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");
const editBtn = document.getElementById("edit-btn");
const submitBtn = document.getElementById("submit-btn");

const progressFill = document.getElementById("progress-fill");
const questionNumber = document.getElementById("question-number");
const sectionLabel = document.getElementById("section-label");
const sectionTitle = document.getElementById("section-title");

// -------------------------
// Begin Assessment
// -------------------------

beginBtn.addEventListener("click", () => {

    welcomeScreen.classList.add("hidden");

    assessment.classList.remove("hidden");

    renderQuestion();

});

// -------------------------
// Update Progress
// -------------------------

function updateProgress() {

    const percent =
        ((currentQuestion + 1) / questions.length) * 100;

    progressFill.style.width = percent + "%";

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    sectionLabel.textContent =
        `Section ${questions[currentQuestion].section} of 4`;

    sectionTitle.textContent =
        questions[currentQuestion].sectionTitle;

}

// -------------------------
// Next Question
// -------------------------

nextBtn.addEventListener("click", () => {

    nextQuestion();

});

// -------------------------
// Previous Question
// -------------------------

previousBtn.addEventListener("click", () => {

    previousQuestion();

});

// -------------------------
// Review Buttons
// -------------------------

editBtn.addEventListener("click", () => {

    reviewScreen.classList.add("hidden");

    assessment.classList.remove("hidden");

});

submitBtn.addEventListener("click", () => {

    showResults();

});

// -------------------------
// Initialize
// -------------------------

previousBtn.style.display = "none";
