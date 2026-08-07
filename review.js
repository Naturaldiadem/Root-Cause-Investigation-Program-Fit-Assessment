/* ==========================================
NATURAL DIADEM
PROGRAM FIT ASSESSMENT
REVIEW.JS
========================================== */

"use strict";

/* ==========================================
GOOGLE SHEETS CONNECTION
========================================== */

const GOOGLE_SHEETS_WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbxe7yxPq9CxgyuU3cH4Nx9VJ-Zl4gngKmYMkGFyau6sLLhySrS7NmvtnoWR6ndk9n-y/exec";

/* ==========================================
REVIEW RENDERING
========================================== */

function renderReview() {

    reviewContainer.innerHTML = "";

    questions.forEach(function (
        question,
        questionIndex
    ) {

        const reviewItem = createReviewItem(
            question,
            questionIndex
        );

        reviewContainer.appendChild(
            reviewItem
        );

    });

}

/* ==========================================
REVIEW ITEM
========================================== */

function createReviewItem(
    question,
    questionIndex
) {

    const reviewItem =
        document.createElement("div");

    reviewItem.className =
        "review-item";

    const reviewHeader =
        document.createElement("div");

    reviewHeader.className =
        "review-header";

    const reviewQuestion =
        document.createElement("h3");

    reviewQuestion.className =
        "review-question";

    reviewQuestion.textContent =
        question.title;

    const editQuestionButton =
        document.createElement("button");

    editQuestionButton.type =
        "button";

    editQuestionButton.className =
        "review-edit-btn secondary";

    editQuestionButton.textContent =
        "Edit";

    editQuestionButton.addEventListener(
        "click",
        function () {

            editQuestion(
                questionIndex
            );

        }
    );

    reviewHeader.appendChild(
        reviewQuestion
    );

    reviewHeader.appendChild(
        editQuestionButton
    );

    const reviewAnswer =
        document.createElement("div");

    reviewAnswer.className =
        "review-answer";

    const answer =
        getAnswer(question.id);

    if (Array.isArray(answer)) {

        const answerList =
            document.createElement("ul");

        answer.forEach(function (
            selectedAnswer
        ) {

            const answerItem =
                document.createElement("li");

            answerItem.textContent =
                selectedAnswer;

            answerList.appendChild(
                answerItem
            );

        });

        reviewAnswer.appendChild(
            answerList
        );

    } else {

        const answerText =
            document.createElement("p");

        answerText.textContent =
            answer ||
            "No response selected.";

        reviewAnswer.appendChild(
            answerText
        );

    }

    reviewItem.appendChild(
        reviewHeader
    );

    reviewItem.appendChild(
        reviewAnswer
    );

    return reviewItem;
}

/* ==========================================
PREPARE SHEET DATA
========================================== */

function createSubmissionData(result) {

    return {

        submittedAt:
            new Date().toISOString(),

        firstName:
            assessmentState.contact.firstName || "",

        lastName:
            assessmentState.contact.lastName || "",

        email:
            assessmentState.contact.email || "",

        answers: {
            "1": getAnswer(1) || "",
            "2": getAnswer(2) || "",
            "3": getAnswer(3) || "",
            "4": getAnswer(4) || "",
            "5": getAnswer(5) || "",
            "6": getAnswer(6) || "",
            "7": getAnswer(7) || "",
            "8": getAnswer(8) || "",
            "9": getAnswer(9) || ""
        },

        result:
            result && result.title
                ? result.title
                : "",

        resultKey:
            result && result.key
                ? result.key
                : ""

    };

}

/* ==========================================
SEND TO GOOGLE SHEETS
========================================== */

async function sendToGoogleSheets(
    submissionData
) {

    try {

        await fetch(
            GOOGLE_SHEETS_WEB_APP_URL,
            {
                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body:
                    JSON.stringify(
                        submissionData
                    )
            }
        );

        return true;

    } catch (error) {

        console.error(
            "The assessment response could not be sent to Google Sheets.",
            error
        );

        return false;

    }
}

/* ==========================================
SUBMISSION
========================================== */

async function submitAssessment() {

    if (assessmentState.submitted) {
        return;
    }

    assessmentState.submitted = true;

    submitButton.disabled = true;

    submitButton.textContent =
        "Submitting...";

    clearSubmissionError();

    try {

        if (
            typeof calculateAssessmentResult !==
            "function"
        ) {

            throw new Error(
                "The assessment result function is unavailable."
            );

        }

        const result =
            calculateAssessmentResult();

        const submissionData =
            createSubmissionData(result);

        await sendToGoogleSheets(
            submissionData
        );

        showResultsScreen();

        if (
            typeof renderResults ===
            "function"
        ) {

            renderResults(result);

        }

    } catch (error) {

        console.error(
            "The assessment could not be submitted.",
            error
        );

        assessmentState.submitted = false;

        submitButton.disabled = false;

        submitButton.textContent =
            "Submit Assessment";

        showSubmissionError();

    }

}

/* ==========================================
SUBMISSION ERROR
========================================== */

function showSubmissionError() {

    clearSubmissionError();

    const errorMessage =
        document.createElement("p");

    errorMessage.id =
        "submission-error";

    errorMessage.className =
        "validation-message";

    errorMessage.setAttribute(
        "role",
        "alert"
    );

    errorMessage.textContent =
        "Something went wrong while processing your assessment. Please try again.";

    reviewContainer.appendChild(
        errorMessage
    );

}

/* ==========================================
CLEAR SUBMISSION ERROR
========================================== */

function clearSubmissionError() {

    const existingError =
        document.getElementById(
            "submission-error"
        );

    if (existingError) {
        existingError.remove();
    }

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
