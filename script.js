/* ==========================================
NATURAL DIADEM
PROGRAM FIT ASSESSMENT
SCRIPT.JS
========================================== */

"use strict";

/* ==========================================
ASSESSMENT STATE
========================================== */

const assessmentState = {
    currentQuestionIndex: 0,
    answers: {},
    contact: {
        firstName: "",
        lastName: "",
        email: ""
    },
    submitted: false
};

/* ==========================================
DOM ELEMENTS
========================================== */

const welcomeScreen = document.getElementById("welcome-screen");
const assessmentScreen = document.getElementById("assessment");
const reviewScreen = document.getElementById("review-screen");
const resultsScreen = document.getElementById("results-screen");

const beginButton = document.getElementById("begin-btn");
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const editButton = document.getElementById("edit-btn");
const submitButton = document.getElementById("submit-btn");

const questionContainer = document.getElementById("question-container");
const reviewContainer = document.getElementById("review-container");
const resultsContent = document.getElementById("results-content");

const sectionLabel = document.getElementById("section-label");
const sectionTitle = document.getElementById("section-title");
const questionNumber = document.getElementById("question-number");
const progressFill = document.getElementById("progress-fill");

/* ==========================================
CONTACT INFORMATION
========================================== */

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const contactValidationMessage =
    document.getElementById("contact-validation-message");

/* ==========================================
SCREEN MANAGEMENT
========================================== */

function hideAllScreens() {
    welcomeScreen.classList.add("hidden");
    assessmentScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");
    resultsScreen.classList.add("hidden");
}

function showWelcomeScreen() {
    hideAllScreens();
    welcomeScreen.classList.remove("hidden");
    scrollToTop();
}

function showAssessmentScreen() {
    hideAllScreens();
    assessmentScreen.classList.remove("hidden");
    scrollToTop();
}

function showReviewScreen() {
    hideAllScreens();
    reviewScreen.classList.remove("hidden");
    scrollToTop();
}

function showResultsScreen() {
    hideAllScreens();
    resultsScreen.classList.remove("hidden");
    scrollToTop();
}

/* ==========================================
GENERAL HELPERS
========================================== */

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function getCurrentQuestion() {
    return questions[assessmentState.currentQuestionIndex];
}

function getAnswer(questionId) {
    return assessmentState.answers[questionId];
}

function saveAnswer(questionId, value) {
    assessmentState.answers[questionId] = value;
}

function removeAnswer(questionId) {
    delete assessmentState.answers[questionId];
}

function hasAnswer(questionId) {
    const answer = getAnswer(questionId);

    if (Array.isArray(answer)) {
        return answer.length > 0;
    }

    return typeof answer === "string" && answer.trim() !== "";
}

function getTotalSections() {
    return new Set(
        questions.map(function (question) {
            return question.section;
        })
    ).size;
}

function getSectionQuestionPosition(questionIndex) {
    const question = questions[questionIndex];

    const questionsInSection = questions.filter(function (item) {
        return item.section === question.section;
    });

    const positionInSection = questionsInSection.findIndex(function (item) {
        return item.id === question.id;
    });

    return {
        current: positionInSection + 1,
        total: questionsInSection.length
    };
}

/* ==========================================
CONTACT VALIDATION
========================================== */

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactInformation() {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();

    clearContactValidationMessage();

    if (!firstName || !lastName || !email) {
        showContactValidationMessage(
            "Please enter your first name, last name, and email address."
        );

        return false;
    }

    if (!isValidEmail(email)) {
        showContactValidationMessage(
            "Please enter a valid email address."
        );

        return false;
    }

    assessmentState.contact.firstName = firstName;
    assessmentState.contact.lastName = lastName;
    assessmentState.contact.email = email;

    return true;
}

function showContactValidationMessage(message) {
    contactValidationMessage.textContent = message;
    contactValidationMessage.classList.remove("hidden");
}

function clearContactValidationMessage() {
    contactValidationMessage.textContent = "";
    contactValidationMessage.classList.add("hidden");
}

/* ==========================================
ANSWER VALIDATION
========================================== */

function validateCurrentQuestion() {
    const currentQuestion = getCurrentQuestion();

    clearValidationMessage();

    if (hasAnswer(currentQuestion.id)) {
        return true;
    }

    showValidationMessage(
        currentQuestion.type === "checkbox"
            ? "Please select at least one response before continuing."
            : "Please select a response before continuing."
    );

    return false;
}

function showValidationMessage(message) {
    clearValidationMessage();

    const validationMessage = document.createElement("p");

    validationMessage.id = "validation-message";
    validationMessage.className = "validation-message";
    validationMessage.setAttribute("role", "alert");
    validationMessage.textContent = message;

    questionContainer.appendChild(validationMessage);
}

function clearValidationMessage() {
    const existingMessage = document.getElementById("validation-message");

    if (existingMessage) {
        existingMessage.remove();
    }
}

/* ==========================================
ASSESSMENT START
========================================== */

function beginAssessment() {
    if (!validateContactInformation()) {
        return;
    }

    assessmentState.currentQuestionIndex = 0;
    assessmentState.answers = {};
    assessmentState.submitted = false;

    showAssessmentScreen();

    if (typeof renderQuestion === "function") {
        renderQuestion();
    }
}

/* ==========================================
KEYBOARD ACCESSIBILITY
========================================== */

function handleKeyboardNavigation(event) {
    const activeElement = document.activeElement;

    const isInputFocused =
        activeElement &&
        (
            activeElement.tagName === "INPUT" ||
            activeElement.tagName === "TEXTAREA" ||
            activeElement.tagName === "SELECT"
        );

    if (event.key !== "Enter" || isInputFocused) {
        return;
    }

    if (!welcomeScreen.classList.contains("hidden")) {
        event.preventDefault();
        beginAssessment();
        return;
    }

    if (!assessmentScreen.classList.contains("hidden")) {
        event.preventDefault();

        if (typeof goToNextQuestion === "function") {
            goToNextQuestion();
        }
    }
}

/* ==========================================
INITIALIZATION
========================================== */

function initializeAssessment() {
    showWelcomeScreen();

    beginButton.addEventListener(
        "click",
        beginAssessment
    );

    document.addEventListener(
        "keydown",
        handleKeyboardNavigation
    );
}

document.addEventListener(
    "DOMContentLoaded",
    initializeAssessment
);
