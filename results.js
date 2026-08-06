/* ==========================================
   NATURAL DIADEM
   PROGRAM FIT ASSESSMENT
   RESULTS.JS
========================================== */

"use strict";

/* ==========================================
   RESULT TYPES
========================================== */

const assessmentResults = {

    ready: {

        key: "ready",

        eyebrow: "Your Personalized Recommendation",

        title: "The Root Cause Investigation Program May Be a Strong Fit",

        message:
            "Based on your responses, you appear ready for a deeper, personalized investigation into the factors that may be contributing to your hair and scalp concerns.",

        details: [
            "You are looking for more than a temporary product-based solution.",
            "You are open to exploring connections between your hair, scalp, and overall health.",
            "You appear willing to make meaningful changes based on what the investigation uncovers.",
            "You are interested in understanding why your concerns may be happening."
        ],

        nextStepTitle: "Your Recommended Next Step",

        nextStepText:
            "Complete the Root Cause Investigation Program Pre-Qualification Application. Your application will be reviewed to determine whether the program can appropriately support your concerns, goals, and location.",

        buttonText: "Apply for the Program",

        buttonUrl: "#"

    },

    learnMore: {

        key: "learn-more",

        eyebrow: "Your Personalized Recommendation",

        title: "You May Be a Fit, but Learning More Is Your Best Next Step",

        message:
            "Your responses suggest that a root cause approach may be relevant to your concerns, but you may need more information before deciding whether the Root Cause Investigation Program is right for you.",

        details: [
            "You are beginning to consider that your hair or scalp concerns may involve more than products alone.",
            "You may still be exploring how internal health patterns can affect hair and scalp health.",
            "You appear interested in answers, but may not yet feel ready to apply.",
            "Learning more about the investigation process can help you make an informed decision."
        ],

        nextStepTitle: "Your Recommended Next Step",

        nextStepText:
            "Review the program information before applying. Pay close attention to how the investigation works, what may be required from you, and the type of support the program provides.",

        buttonText: "Learn More About the Program",

        buttonUrl: "#"

    },

    otherSupport: {

        key: "other-support",

        eyebrow: "Your Personalized Recommendation",

        title: "Another Type of Support May Be More Appropriate Right Now",

        message:
            "Based on your responses, the Root Cause Investigation Program may not be the most appropriate next step for you at this time.",

        details: [
            "The program is not designed to provide emergency care or immediate medical treatment.",
            "It is not a quick-fix or product-recommendation service.",
            "The investigation process requires time, participation, and a willingness to explore possible contributing factors.",
            "You may benefit from addressing your immediate needs with an appropriate licensed medical provider first."
        ],

        nextStepTitle: "Your Recommended Next Step",

        nextStepText:
            "Contact a qualified medical professional for evaluation, especially if your symptoms are sudden, severe, rapidly worsening, or require immediate attention.",

        buttonText: "",

        buttonUrl: ""

    }

};

/* ==========================================
   SCORING
========================================== */

function calculateAssessmentResult() {
    let fitScore = 0;
    let readinessScore = 0;
    let quickFixScore = 0;
    let medicalCareFlag = false;

    const answer1 = getAnswer(1) || [];
    const answer2 = getAnswer(2) || "";
    const answer3 = getAnswer(3) || [];
    const answer4 = getAnswer(4) || "";
    const answer5 = getAnswer(5) || [];
    const answer6 = getAnswer(6) || "";
    const answer7 = getAnswer(7) || [];
    const answer8 = getAnswer(8) || "";
    const answer9 = getAnswer(9) || "";

    /* ==========================================
       QUESTION 1
    ========================================== */

    if (
        Array.isArray(answer1) &&
        answer1.length > 0 &&
        !answer1.includes("None of the above")
    ) {
        fitScore += 1;
    }

    /* ==========================================
       QUESTION 2
    ========================================== */

    if (
        answer2 === "6–12 months" ||
        answer2 === "More than 1 year"
    ) {
        fitScore += 2;
    }

    if (
        answer2 === "3–6 months"
    ) {
        fitScore += 1;
    }

    /* ==========================================
       QUESTION 3
    ========================================== */

    if (
        Array.isArray(answer3) &&
        answer3.length >= 2 &&
        !answer3.includes("I haven't tried anything yet")
    ) {
        fitScore += 2;
    }

    if (
        Array.isArray(answer3) &&
        answer3.length === 1 &&
        !answer3.includes("I haven't tried anything yet")
    ) {
        fitScore += 1;
    }

    /* ==========================================
       QUESTION 4
    ========================================== */

    if (
        answer4 === "Nothing changed" ||
        answer4 === "Things improved temporarily" ||
        answer4 === "My symptoms continued to worsen"
    ) {
        fitScore += 2;
    }

    if (
        answer4 === "I'm still not sure what's causing it"
    ) {
        fitScore += 1;
    }

    /* ==========================================
       QUESTION 5
    ========================================== */

    if (
        Array.isArray(answer5) &&
        answer5.length > 0 &&
        !answer5.includes("None of these")
    ) {
        fitScore += 2;
    }

    /* ==========================================
       QUESTION 6
    ========================================== */

    if (
        answer6 ===
        "I'm convinced my body is connected to what's happening with my hair."
    ) {
        fitScore += 3;
        readinessScore += 2;
    }

    if (
        answer6 ===
        "I've started wondering if something inside my body could be contributing."
    ) {
        fitScore += 2;
        readinessScore += 1;
    }

    if (
        answer6 ===
        "I believe my hair problem is only about my hair."
    ) {
        quickFixScore += 2;
    }

    /* ==========================================
       QUESTION 7
    ========================================== */

    if (
        Array.isArray(answer7) &&
        answer7.includes(
            "I want to understand why this is happening."
        )
    ) {
        fitScore += 2;
    }

    if (
        Array.isArray(answer7) &&
        answer7.includes(
            "I want a personalized investigation into my hair and scalp concerns."
        )
    ) {
        fitScore += 3;
        readinessScore += 2;
    }

    if (
        Array.isArray(answer7) &&
        answer7.includes(
            "I want long-term improvement in my overall health."
        )
    ) {
        fitScore += 2;
        readinessScore += 1;
    }

    if (
        Array.isArray(answer7) &&
        answer7.includes(
            "I'm mainly looking for a product recommendation."
        )
    ) {
        quickFixScore += 3;
    }

    /* ==========================================
       QUESTION 8
    ========================================== */

    if (
        answer8 ===
        "I'm committed to making meaningful changes if necessary."
    ) {
        readinessScore += 4;
        fitScore += 3;
    }

    if (
        answer8 ===
        "I'm open to small changes."
    ) {
        readinessScore += 2;
        fitScore += 1;
    }

    if (
        answer8 ===
        "I'm only looking for a quick fix."
    ) {
        quickFixScore += 5;
    }

    /* ==========================================
       QUESTION 9
    ========================================== */

    if (
        answer9 ===
        "I'm ready to apply for the Root Cause Investigation Program."
    ) {
        readinessScore += 5;
        fitScore += 2;
    }

    if (
        answer9 ===
        "I'm interested but I'd like to learn more first."
    ) {
        readinessScore += 1;
    }

    if (
        answer9 ===
        "I'm looking for immediate medical treatment or emergency care."
    ) {
        medicalCareFlag = true;
    }

    /* ==========================================
       FINAL RESULT
    ========================================== */

    if (medicalCareFlag) {
        return assessmentResults.otherSupport;
    }

    if (
        quickFixScore >= 5 ||
        fitScore < 6
    ) {
        return assessmentResults.otherSupport;
    }

    if (
        fitScore >= 12 &&
        readinessScore >= 7
    ) {
        return assessmentResults.ready;
    }

    return assessmentResults.learnMore;
}

/* ==========================================
   RESULTS RENDERING
========================================== */

function renderResults(result) {
    resultsContent.innerHTML = "";

    if (!result) {
        return;
    }

    const resultWrapper = document.createElement("div");
    resultWrapper.className =
        "result-wrapper result-" + result.key;

    const eyebrow = document.createElement("p");
    eyebrow.className = "result-eyebrow";
    eyebrow.textContent = result.eyebrow;

    const title = document.createElement("h2");
    title.className = "result-title";
    title.textContent = result.title;

    const message = document.createElement("p");
    message.className = "result-message";
    message.textContent = result.message;

    resultWrapper.appendChild(eyebrow);
    resultWrapper.appendChild(title);
    resultWrapper.appendChild(message);

    if (
        Array.isArray(result.details) &&
        result.details.length > 0
    ) {
        const detailsBox = document.createElement("div");
        detailsBox.className = "result-details";

        const detailsList = document.createElement("ul");

        result.details.forEach(function (detail) {
            const detailItem = document.createElement("li");
            detailItem.textContent = detail;

            detailsList.appendChild(detailItem);
        });

        detailsBox.appendChild(detailsList);
        resultWrapper.appendChild(detailsBox);
    }

    const nextStepBox = document.createElement("div");
    nextStepBox.className = "result-next-step";

    const nextStepTitle = document.createElement("h3");
    nextStepTitle.textContent = result.nextStepTitle;

    const nextStepText = document.createElement("p");
    nextStepText.textContent = result.nextStepText;

    nextStepBox.appendChild(nextStepTitle);
    nextStepBox.appendChild(nextStepText);

    if (
        result.buttonText &&
        result.buttonUrl
    ) {
        const resultButton = document.createElement("a");

        resultButton.className = "result-button";
        resultButton.href = result.buttonUrl;
        resultButton.textContent = result.buttonText;

        nextStepBox.appendChild(resultButton);
    }

    resultWrapper.appendChild(nextStepBox);

    const disclaimer = document.createElement("div");
    disclaimer.className = "result-disclaimer";

    const disclaimerText = document.createElement("p");

    disclaimerText.textContent =
        "This assessment provides an educational recommendation only. It does not diagnose, treat, cure, or prevent any medical condition and does not replace medical advice.";

    disclaimer.appendChild(disclaimerText);
    resultWrapper.appendChild(disclaimer);

    const restartButton = document.createElement("button");

    restartButton.type = "button";
    restartButton.className = "secondary restart-btn";
    restartButton.textContent = "Retake Assessment";

    restartButton.addEventListener("click", restartAssessment);

    resultWrapper.appendChild(restartButton);
    resultsContent.appendChild(resultWrapper);

    submitButton.disabled = false;
    submitButton.textContent = "Submit Assessment";
}

/* ==========================================
   RESTART ASSESSMENT
========================================== */

function restartAssessment() {
    assessmentState.currentQuestionIndex = 0;
    assessmentState.answers = {};
    assessmentState.submitted = false;

    reviewContainer.innerHTML = "";
    resultsContent.innerHTML = "";

    submitButton.disabled = false;
    submitButton.textContent = "Submit Assessment";

    showWelcomeScreen();
}
