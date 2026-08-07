/* ==========================================
NATURAL DIADEM
PROGRAM FIT ASSESSMENT
RESULTS.JS
========================================== */

"use strict";

/* ==========================================
CONSULTATION CHECKOUT
========================================== */

const PROGRAM_FIT_CONSULTATION_URL =
    "https://jnique-smith.mykajabi.com/offers/uW6J6iqY";

/* ==========================================
RESULT TYPES
========================================== */

const assessmentResults = {

    ready: {

        key: "ready",

        eyebrow: "Your Personalized Recommendation",

        title: "The Root Cause Investigation Program May Be a Strong Fit",

        message:
            "Based on your responses, the Root Cause Investigation Program may be an appropriate next step for you.",

        details: [
            "You are interested in understanding why your hair or scalp concerns may be happening.",
            "You appear open to looking beyond products and investigating possible contributing factors.",
            "You are willing to consider meaningful lifestyle changes if they may be connected to your concerns.",
            "You indicated that you are ready to take the next step and apply."
        ],

        nextStepTitle: "Your Recommended Next Step",

        nextStepText:
            "Complete the Root Cause Investigation Program Pre-Qualification Application. Your responses will be reviewed to determine whether the program can appropriately support your concerns, goals, and location.",

        buttonText: "Complete the Pre-Qualification Application",

        buttonUrl:
            "https://jnique-smith.mykajabi.com/root-cause-investigation-pre-qual",

        consultationTitle:
            "Prefer to Talk With J'Nique First?",

        consultationText:
            "If you would like to discuss your concerns before completing the Pre-Qualification Application, you can book a private 30-minute Program Fit Consultation for $107. This consultation is designed to help determine whether the Root Cause Investigation Program may be the right next step for you.",

        consultationButtonText:
            "Book a 30-Minute Consultation",

        consultationButtonUrl:
            PROGRAM_FIT_CONSULTATION_URL

    },

    learnMore: {

        key: "learn-more",

        eyebrow: "Your Personalized Recommendation",

        title: "Learning More Is Your Best Next Step",

        message:
            "Your responses suggest that a root cause approach may be relevant to your hair or scalp concerns, but you indicated that you would like to learn more before applying.",

        details: [
            "You may be beginning to wonder whether something beyond your hair or scalp could be contributing.",
            "You may want a clearer understanding of how hair, scalp, and body signals can be connected.",
            "You do not need to apply before you feel ready.",
            "Learning more can help you decide whether a deeper investigation is the right next step for you."
        ],

        nextStepTitle: "Your Recommended Next Step",

        nextStepText:
            "Read A Letter From Your Scalp. It will help you understand why hair and scalp changes may be part of a larger conversation happening throughout the body.",

        buttonText: "Read A Letter From Your Scalp",

        buttonUrl:
            "https://jnique-smith.mykajabi.com/scalp-letter-opt-in",

        consultationTitle:
            "Would You Rather Talk It Through?",

        consultationText:
            "If you are not sure whether the Root Cause Investigation Program fits what you are experiencing, you can book a private 30-minute Program Fit Consultation with J'Nique for $107. You'll have an opportunity to discuss your concerns, ask questions, and determine whether the program may be an appropriate next step.",

        consultationButtonText:
            "Book a 30-Minute Consultation",

        consultationButtonUrl:
            PROGRAM_FIT_CONSULTATION_URL

    },

    medicalCare: {

        key: "medical-care",

        eyebrow: "Your Personalized Recommendation",

        title: "Medical Care Is the Appropriate Next Step",

        message:
            "You indicated that you are looking for immediate medical treatment or emergency care. The Root Cause Investigation Program is not designed to provide emergency evaluation, diagnosis, or immediate medical treatment.",

        details: [
            "Contact an appropriate licensed medical provider for evaluation.",
            "Seek urgent or emergency care if your symptoms are sudden, severe, rapidly worsening, or feel life-threatening.",
            "Do not delay medical care while waiting to complete an educational program or assessment.",
            "The Root Cause Investigation Program may be considered later, after your immediate medical needs have been addressed."
        ],

        nextStepTitle: "Your Recommended Next Step",

        nextStepText:
            "Contact your medical provider, an urgent care center, or emergency services based on the severity of your symptoms.",

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
       QUESTION 9 ROUTING
    ========================================== */

    if (
        answer9 ===
        "I'm looking for immediate medical treatment or emergency care."
    ) {
        return assessmentResults.medicalCare;
    }

    if (
        answer9 ===
        "I'm interested but I'd like to learn more first."
    ) {
        return assessmentResults.learnMore;
    }

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
    } else if (
        answer2 === "3–6 months"
    ) {
        fitScore += 1;
    }

    /* ==========================================
       QUESTION 3
    ========================================== */

    if (
        Array.isArray(answer3) &&
        answer3.includes("I haven't tried anything yet")
    ) {
        fitScore += 0;
    } else if (
        Array.isArray(answer3) &&
        answer3.length >= 2
    ) {
        fitScore += 2;
    } else if (
        Array.isArray(answer3) &&
        answer3.length === 1
    ) {
        fitScore += 1;
    }

    /* ==========================================
       QUESTION 4
    ========================================== */

    if (
        answer4 ===
        "Nothing changed after trying those approaches." ||
        answer4 ===
        "Things improved temporarily." ||
        answer4 ===
        "My symptoms continued to worsen."
    ) {
        fitScore += 2;
    } else if (
        answer4 ===
        "I tried different approaches, but I'm still not sure what's causing the problem."
    ) {
        fitScore += 2;
    } else if (
        answer4 ===
        "I haven't tried any approaches yet."
    ) {
        fitScore += 0;
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
        "I'm convinced my body is connected to what's happening with my hair or scalp."
    ) {
        fitScore += 3;
        readinessScore += 2;
    } else if (
        answer6 ===
        "I've started wondering if something inside my body could be contributing to my hair or scalp concerns."
    ) {
        fitScore += 2;
        readinessScore += 1;
    } else if (
        answer6 ===
        "I believe my hair or scalp problem is only about my hair or scalp."
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
            "I want long-term improvement in my hair and scalp health."
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
    } else if (
        answer8 ===
        "I'm open to small changes."
    ) {
        readinessScore += 2;
        fitScore += 1;
    } else if (
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

    /* ==========================================
       FINAL RESULT
    ========================================== */

    if (
        answer9 ===
        "I'm ready to apply for the Root Cause Investigation Program."
    ) {
        return assessmentResults.ready;
    }

    if (
        quickFixScore >= 5 ||
        fitScore < 6
    ) {
        return assessmentResults.learnMore;
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

    /* ==========================================
       PRIMARY NEXT STEP
    ========================================== */

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

    /* ==========================================
       OPTIONAL PROGRAM FIT CONSULTATION
    ========================================== */

    if (
        result.consultationTitle &&
        result.consultationText &&
        result.consultationButtonText &&
        result.consultationButtonUrl
    ) {

        const consultationBox =
            document.createElement("div");

        consultationBox.className =
            "result-consultation";

        const consultationTitle =
            document.createElement("h3");

        consultationTitle.textContent =
            result.consultationTitle;

        const consultationText =
            document.createElement("p");

        consultationText.textContent =
            result.consultationText;

        const consultationButton =
            document.createElement("a");

        consultationButton.className =
            "result-button consultation-button";

        consultationButton.href =
            result.consultationButtonUrl;

        consultationButton.textContent =
            result.consultationButtonText;

        consultationBox.appendChild(
            consultationTitle
        );

        consultationBox.appendChild(
            consultationText
        );

        consultationBox.appendChild(
            consultationButton
        );

        resultWrapper.appendChild(
            consultationBox
        );

    }

    /* ==========================================
       DISCLAIMER
    ========================================== */

    const disclaimer = document.createElement("div");

    disclaimer.className = "result-disclaimer";

    const disclaimerText = document.createElement("p");

    disclaimerText.textContent =
        "This assessment provides an educational recommendation only. It does not diagnose, treat, cure, or prevent any medical condition and does not replace medical advice.";

    disclaimer.appendChild(disclaimerText);

    resultWrapper.appendChild(disclaimer);

    /* ==========================================
       RETAKE ASSESSMENT
    ========================================== */

    const restartButton = document.createElement("button");

    restartButton.type = "button";
    restartButton.className = "secondary restart-btn";
    restartButton.textContent = "Retake Assessment";

    restartButton.addEventListener(
        "click",
        restartAssessment
    );

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
