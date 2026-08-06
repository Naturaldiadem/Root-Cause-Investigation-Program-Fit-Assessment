/* ==========================================
   NATURAL DIADEM
   NAVIGATION
========================================== */

/*
----------------------------------------------
NEXT QUESTION
----------------------------------------------
*/

function nextQuestion() {

    saveCurrentAnswer();

    if (!validateAnswer()) {

        alert("Please answer this question before continuing.");

        return;

    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        renderQuestion();

    }

    else {

        showReview();

    }

}

/*
----------------------------------------------
PREVIOUS QUESTION
----------------------------------------------
*/

function previousQuestion() {

    saveCurrentAnswer();

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

    }

}

/*
----------------------------------------------
VALIDATE ANSWER
----------------------------------------------
*/

function validateAnswer() {

    const question = questions[currentQuestion];

    if (question.type === "radio") {

        return answers[question.id] !== undefined;

    }

    if (question.type === "checkbox") {

        return (
            answers[question.id] &&
            answers[question.id].length > 0
        );

    }

    return true;

}

/*
----------------------------------------------
SHOW REVIEW SCREEN
----------------------------------------------
*/

function showReview() {

    assessment.classList.add("hidden");

    reviewScreen.classList.remove("hidden");

    buildReview();

}
