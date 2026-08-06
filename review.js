/* ==========================================
   NATURAL DIADEM
   PROGRAM FIT ASSESSMENT
   REVIEW.JS
========================================== */

"use strict";

/* ==========================================
   REVIEW RENDERING
========================================== */

function renderReview() {
    reviewContainer.innerHTML = "";

    questions.forEach(function (question, questionIndex) {
        const reviewItem = createReviewItem(
            question,
            questionIndex
        );

        reviewContainer.appendChild(reviewItem);
    });
}

/* ==========================================
   REVIEW ITEM
========================================== */

function createReviewItem(question, questionIndex) {
    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";

    const reviewHeader = document.createElement("div");
    reviewHeader.className = "review-header";

    const reviewQuestion = document.createElement("h3");
    reviewQuestion.className = "review-question";
    reviewQuestion.textContent = question.title;

    const editQuestionButton = document.createElement("button");
    editQuestionButton.type = "button";
    editQuestionButton.className = "review-edit-btn secondary";
    editQuestionButton.textContent = "Edit";

    editQuestionButton.addEventListener("click", function () {
        editQuestion(questionIndex);
    });

    reviewHeader.appendChild(reviewQuestion);
    reviewHeader.appendChild(editQuestionButton);

    const reviewAnswer = document.createElement("div");
    reviewAnswer.className = "review-answer";

    const answer = getAnswer(question.id);

    if (Array.isArray(answer)) {
        const answerList = document.createElement("ul");

        answer.forEach(function (selectedAnswer) {
            const answerItem = document.createElement("li");
            answerItem.textContent = selectedAnswer;

            answerList.appendChild(answerItem);
        });

        reviewAnswer.appendChild(answerList);
    } else {
        const answerText = document.createElement("p");

        answerText.textContent =
            answer || "No response selected.";

        reviewAnswer.appendChild(answerText);
    }

    reviewItem.appendChild(reviewHeader);
    reviewItem.appendChild(reviewAnswer);

    return reviewItem;
}

/* ==========================================
   SUBMISSION
========================================== */

function submitAssessment() {
    if (assessmentState.submitted) {
        return;
    }

    assessmentState.submitted = true;
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
        if (typeof calculateAssessmentResult !== "function") {
            throw new Error(
                "The assessment result function is unavailable."
            );
        }

        const result = calculateAssessmentResult();

        showResultsScreen();

        if (typeof renderResults === "function") {
            renderResults(result);
        }
    } catch (error) {
        console.error(
            "The assessment could not be submitted.",
            error
        );

        assessmentState.submitted = false;
        submitButton.disabled = false;
        submitButton.textContent = "Submit Assessment";

        showSubmissionError();
    }
}

/* ==========================================
   SUBMISSION ERROR
========================================== */

function showSubmissionError() {
    const existingError = document.getElementById(
        "submission-error"
    );

    if (existingError) {
        existingError.remove();
    }

    const errorMessage = document.createElement("p");

    errorMessage.id = "submission-error";
    errorMessage.className = "validation-message";
    errorMessage.setAttribute("role", "alert");

    errorMessage.textContent =
        "Something went wrong while processing your assessment. Please try again.";

    reviewContainer.appendChild(errorMessage);
}

/* ==========================================
   INITIALIZATION
========================================== */

function initializeReview() {
    submitButton.addEventListener(
        "click",
        submitAssessment
    );
}

document.addEventListener(
    "DOMContentLoaded",
    initializeReview
);
