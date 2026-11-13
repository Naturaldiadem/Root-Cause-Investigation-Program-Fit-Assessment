/* ==========================================
   NATURAL DIADEM
   PROGRAM FIT ASSESSMENT — SCRIPT.JS
========================================== */

"use strict";

const assessmentState = {
    currentQuestionIndex: 0,
    answers: {},
    contact: {
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        region: "",
        postalCode: ""
    },
    submitted: false
};

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

/* CONTACT & LOCATION INPUTS */
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const regionInput = document.getElementById("region");
const postalCodeInput = document.getElementById("postal-code");
const contactValidationMessage = document.getElementById("contact-validation-message");

/* SCREEN MANAGEMENT */
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

/* HELPERS */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    return new Set(questions.map(function (q) { return q.section; })).size;
}

/* CONTACT & LOCATION VALIDATION */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactInformation() {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const country = countryInput.value.trim();
    const region = regionInput.value.trim();
    const postalCode = postalCodeInput.value.trim();

    clearContactValidationMessage();

    if (!firstName || !lastName || !email || !country || !region || !postalCode) {
        showContactValidationMessage(
            "Please complete all fields (name, email, country/territory, city/state, and postal/ZIP code) so we can verify resource shipping."
        );
        return false;
    }

    if (!isValidEmail(email)) {
        showContactValidationMessage("Please enter a valid email address.");
        return false;
    }

    assessmentState.contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        region: region,
        postalCode: postalCode
    };

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

/* QUESTION VALIDATION */
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

/* ASSESSMENT START */
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

/* KEYBOARD ACCESSIBILITY */
function handleKeyboardNavigation(event) {
    const activeElement = document.activeElement;
    const isInputFocused =
        activeElement &&
        (activeElement.tagName === "INPUT" ||
            activeElement.tagName === "TEXTAREA" ||
            activeElement.tagName === "SELECT");

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

/* INIT */
function initializeAssessment() {
    showWelcomeScreen();
    beginButton.addEventListener("click", beginAssessment);
    document.addEventListener("keydown", handleKeyboardNavigation);
}

document.addEventListener("DOMContentLoaded", initializeAssessment);
