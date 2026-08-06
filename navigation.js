/* ==========================================
   NATURAL DIADEM
   PROGRAM FIT ASSESSMENT
   NAVIGATION.JS
========================================== */

"use strict";

/* ==========================================
   NEXT QUESTION
========================================== */

function goToNextQuestion() {
    if (!validateCurrentQuestion()) {
        return;
    }

    const isLastQuestion =
        assessmentState.currentQuestionIndex ===
        questions.length - 1;

    if (isLastQuestion) {
        openReviewScreen();
        return;
    }

    assessmentState.currentQuestionIndex += 1;

    renderQuestion();

    scrollToTop();
}

/* ==========================================
   PREVIOUS QUESTION
========================================== */

function goToPreviousQuestion() {
    if (assessmentState.currentQuestionIndex <= 0) {
        return;
    }

    assessmentState.currentQuestionIndex -= 1;

    renderQuestion();

    scrollToTop();
}

/* ==========================================
   OPEN REVIEW
========================================== */

function openReviewScreen() {
    showReviewScreen();

    if (typeof renderReview === "function") {
        renderReview();
    }
}

/* ==========================================
   RETURN FROM REVIEW
========================================== */

function returnToAssessment() {
    assessmentState.currentQuestionIndex =
        questions.length - 1;

    showAssessmentScreen();

    renderQuestion();
}

/* ==========================================
   EDIT SPECIFIC QUESTION
========================================== */

function editQuestion(questionIndex) {
    if (
        questionIndex < 0 ||
        questionIndex >= questions.length
    ) {
        return;
    }

    assessmentState.currentQuestionIndex =
        questionIndex;

    showAssessmentScreen();

    renderQuestion();
}

/* ==========================================
   BUTTON EVENTS
========================================== */

function initializeNavigation() {
    previousButton.addEventListener(
        "click",
        goToPreviousQuestion
    );

    nextButton.addEventListener(
        "click",
        goToNextQuestion
    );

    editButton.addEventListener(
        "click",
        returnToAssessment
    );
}

/* ==========================================
   INITIALIZATION
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    initializeNavigation
);
