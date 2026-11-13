/* ==========================================
   NATURAL DIADEM
   PROGRAM FIT ASSESSMENT — RESULTS.JS
========================================== */

"use strict";

/* UPDATE THESE URLS WHEN YOUR KAJABI PAGES ARE PUBLISHED */
const URL_HAIR_CLARITY_CONSULT = "https://jnique-smith.mykajabi.com/hair-clarity-consultation";
const URL_BEYOND_THE_SYMPTOMS = "https://jnique-smith.mykajabi.com/beyond-the-symptoms";
const URL_SCALP_LETTER = "https://jnique-smith.mykajabi.com/scalp-letter-opt-in";

const CONFIRMED_SHIPPING_COUNTRIES = [
    "United States",
    "U.S. Virgin Islands",
    "Puerto Rico",
    "Canada",
    "United Kingdom"
];

const assessmentResults = {

    ready: {
        key: "ready",
        eyebrow: "Your Personalized Recommendation",
        title: "You Qualify for a 1:1 Hair Clarity Consultation",
        message:
            "Based on your responses and location, The Crown of Your Dreams: Root Cause Investigation Program appears to be a strong fit for your goals.",
        details: [
            "You are ready to look beyond surface products and investigate internal and lifestyle contributors.",
            "You are open to meaningful, guided changes to support long-term hair and scalp health.",
            "Your location is within our standard lab and product shipping regions.",
            "Your $75 Hair Clarity Consultation is non-refundable and 100% credited toward your program enrollment within 14 days."
        ],
        nextStepTitle: "Your Recommended Next Step",
        nextStepText:
            "Reserve your 30-minute Hair Clarity Consultation ($75) with J'Nique Smith, RN, Certified Trichologist. We will review your assessment, pinpoint your starting Hair Signal Pattern, map your baseline labs, and confirm whether the 6-month ($4,500) or 12-month ($8,000) investigation is right for you.",
        buttonText: "Book Your $75 Hair Clarity Consultation",
        buttonUrl: URL_HAIR_CLARITY_CONSULT,
        secondaryText: "Not ready for 1:1 yet? Explore Beyond The Symptoms ($77/mo) →",
        secondaryUrl: URL_BEYOND_THE_SYMPTOMS
    },

    internationalCheck: {
        key: "international-check",
        eyebrow: "Your Personalized Recommendation",
        title: "You Qualify — Let's Confirm Courier Shipping on Your Consult",
        message:
            "Your responses show strong readiness for The Crown of Your Dreams: Root Cause Investigation Program. Because you are located outside the US, Canada, and the UK, we will verify lab and product courier delivery to your exact address during your consultation before you enroll.",
        details: [
            "You are ready for a personalized root-cause investigation into your hair and scalp concerns.",
            "You are prepared to invest at the 1:1 program level ($4,500–$8,000, including investigation resources).",
            "We will confirm EquiLife & XTC courier delivery and any international shipping adjustments for your location before finalizing enrollment.",
            "Your $75 Hair Clarity Consultation is 100% credited toward your enrollment within 14 days."
        ],
        nextStepTitle: "Your Recommended Next Step",
        nextStepText:
            "Book your 30-minute Hair Clarity Consultation ($75) so we can review your Hair Signal Pattern, map your baseline labs, and confirm shipping logistics for your postal code.",
        buttonText: "Book Your $75 Hair Clarity Consultation",
        buttonUrl: URL_HAIR_CLARITY_CONSULT,
        secondaryText: "Prefer a virtual-only option anywhere in the world? Join Beyond The Symptoms →",
        secondaryUrl: URL_BEYOND_THE_SYMPTOMS
    },

    pregnantHold: {
        key: "pregnant-hold",
        eyebrow: "Your Personalized Recommendation",
        title: "Start With Beyond The Symptoms During Pregnancy or Breastfeeding",
        message:
            "Congratulations on this season! Because functional lab testing and targeted detoxification protocols in The Crown of Your Dreams are reserved for women who are not currently pregnant or breastfeeding, our educational membership is your safest, most supportive place to start.",
        details: [
            "Learn gentle, pregnancy- and breastfeeding-friendly scalp and lifestyle foundations.",
            "Join weekly live classes (Wednesdays at 12:00 PM AST) and access the full replay library.",
            "Build healthy daily tracking habits now so you are ready if you choose to pursue 1:1 lab testing post-delivery or post-breastfeeding."
        ],
        nextStepTitle: "Your Recommended Next Step",
        nextStepText:
            "Join Beyond The Symptoms at our founding member rate ($77/month) for ongoing education, community support, and root-cause clarity.",
        buttonText: "Join Beyond The Symptoms ($77/mo)",
        buttonUrl: URL_BEYOND_THE_SYMPTOMS,
        secondaryText: "Or start by reading A Letter From Your Scalp (Free) →",
        secondaryUrl: URL_SCALP_LETTER
    },

    membershipFit: {
        key: "membership-fit",
        eyebrow: "Your Personalized Recommendation",
        title: "Beyond The Symptoms Is Your Best Starting Point",
        message:
            "You want real, root-cause answers for your hair and scalp—without jumping into a $4,500–$8,000 private 1:1 investigation right now. Our monthly membership gives you direct clinical education and structure at an accessible monthly rate.",
        details: [
            "Understand how nutrition, stress, gut health, hormones, and daily habits connect to your scalp.",
            "Attend live weekly classes with J'Nique Smith, RN, Certified Trichologist (Wednesdays at 12:00 PM AST) plus on-demand replays.",
            "Start implementing foundational root-cause shifts immediately—and upgrade to 1:1 investigation anytime you feel ready."
        ],
        nextStepTitle: "Your Recommended Next Step",
        nextStepText:
            "Join Beyond The Symptoms at our founding member rate ($77/month) to start uncovering what your scalp is telling you.",
        buttonText: "Join Beyond The Symptoms ($77/mo)",
        buttonUrl: URL_BEYOND_THE_SYMPTOMS,
        secondaryText: "Prefer to read first? Get A Letter From Your Scalp (Free) →",
        secondaryUrl: URL_SCALP_LETTER
    },

    learnMore: {
        key: "learn-more",
        eyebrow: "Your Personalized Recommendation",
        title: "Learning More Is Your Best Next Step",
        message:
            "Your responses suggest that a root-cause approach may be relevant to your hair or scalp concerns, and starting with foundational education will help you decide your best path forward.",
        details: [
            "You may be beginning to wonder whether something beyond surface products is contributing.",
            "You want a clearer understanding of how hair, scalp, and internal body signals connect.",
            "There is zero pressure to apply before you feel ready."
        ],
        nextStepTitle: "Your Recommended Next Step",
        nextStepText:
            "Read A Letter From Your Scalp—a free educational letter explaining why hair and scalp changes are often clues to a larger conversation inside the body.",
        buttonText: "Read A Letter From Your Scalp",
        buttonUrl: URL_SCALP_LETTER,
        secondaryText: "Ready for weekly classes & community? Explore Beyond The Symptoms ($77/mo) →",
        secondaryUrl: URL_BEYOND_THE_SYMPTOMS
    },

    medicalCare: {
        key: "medical-care",
        eyebrow: "Your Personalized Recommendation",
        title: "Medical Care Is the Appropriate Next Step",
        message:
            "You indicated that you are looking for immediate medical treatment or emergency care. The Root Cause Investigation Program does not provide emergency evaluation, diagnosis, or immediate medical treatment.",
        details: [
            "Contact an appropriate licensed medical provider for evaluation.",
            "Seek urgent or emergency care if your symptoms are sudden, severe, or rapidly worsening.",
            "Do not delay medical care while waiting to complete an educational program or assessment.",
            "Our programs may be considered later once your immediate medical needs are addressed."
        ],
        nextStepTitle: "Your Recommended Next Step",
        nextStepText:
            "Contact your medical provider, an urgent care clinic, or emergency services based on the severity of your symptoms.",
        buttonText: "",
        buttonUrl: ""
    }
};

/* CALCULATE RESULT */
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
    const answer9Pregnant = getAnswer(9) || "";
    const answer11Investment = getAnswer(11) || "";
    const answer12NextStep = getAnswer(12) || "";

    const country = (assessmentState.contact && assessmentState.contact.country) || "";
    const isConfirmedShipping = CONFIRMED_SHIPPING_COUNTRIES.includes(country);

    /* IMMEDIATE SAFETY & ROUTING GATES */
    if (answer12NextStep === "I'm looking for immediate medical treatment or emergency care.") {
        return assessmentResults.medicalCare;
    }

    if (answer9Pregnant === "Yes") {
        return assessmentResults.pregnantHold;
    }

    if (answer12NextStep === "I'm interested, but I'd like to learn more first.") {
        return assessmentResults.learnMore;
    }

    if (answer11Investment === "Not right now — I would prefer a lower-cost starting option.") {
        return assessmentResults.membershipFit;
    }

    /* SCORING */
    if (Array.isArray(answer1) && answer1.length > 0 && !answer1.includes("None of the above")) {
        fitScore += 1;
    }

    if (answer2 === "6–12 months" || answer2 === "More than 1 year") {
        fitScore += 2;
    } else if (answer2 === "3–6 months") {
        fitScore += 1;
    }

    if (Array.isArray(answer3) && !answer3.includes("I haven't tried anything yet")) {
        fitScore += answer3.length >= 2 ? 2 : 1;
    }

    if (answer4 && answer4 !== "I haven't tried any approaches yet.") {
        fitScore += 2;
    }

    if (Array.isArray(answer5) && answer5.length > 0 && !answer5.includes("None of these")) {
        fitScore += 2;
    }

    if (answer6 === "I'm convinced my body is connected to what's happening with my hair or scalp.") {
        fitScore += 3;
        readinessScore += 2;
    } else if (answer6 === "I've started wondering if something inside my body could be contributing to my hair or scalp concerns.") {
        fitScore += 2;
        readinessScore += 1;
    } else if (answer6 === "I believe my hair or scalp problem is only about my hair or scalp.") {
        quickFixScore += 2;
    }

    if (Array.isArray(answer7)) {
        if (answer7.includes("I want to understand why this is happening.")) fitScore += 2;
        if (answer7.includes("I want a personalized investigation into my hair and scalp concerns.")) {
            fitScore += 3;
            readinessScore += 2;
        }
        if (answer7.includes("I want long-term improvement in my hair and scalp health.")) {
            fitScore += 2;
            readinessScore += 1;
        }
        if (answer7.includes("I'm mainly looking for a product recommendation.")) quickFixScore += 3;
    }

    if (answer8 === "I'm committed to making meaningful changes if necessary.") {
        readinessScore += 4;
        fitScore += 3;
    } else if (answer8 === "I'm open to small changes.") {
        readinessScore += 2;
        fitScore += 1;
    } else if (answer8 === "I'm only looking for a quick fix.") {
        quickFixScore += 5;
    }

    if (
        answer12NextStep === "I'm ready to book my $75 Hair Clarity Consultation (100% credited toward enrollment)." &&
        answer11Investment === "Yes, I am prepared to invest at this level if it is the right fit."
    ) {
        return isConfirmedShipping ? assessmentResults.ready : assessmentResults.internationalCheck;
    }

    if (quickFixScore >= 5 || fitScore < 6) {
        return assessmentResults.learnMore;
    }

    if (fitScore >= 12 && readinessScore >= 7) {
        return isConfirmedShipping ? assessmentResults.ready : assessmentResults.internationalCheck;
    }

    return assessmentResults.membershipFit;
}

/* RENDER RESULTS */
function renderResults(result) {
    resultsContent.innerHTML = "";
    if (!result) return;

    const resultWrapper = document.createElement("div");
    resultWrapper.className = "result-wrapper result-" + result.key;

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

    if (Array.isArray(result.details) && result.details.length > 0) {
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

    if (result.buttonText && result.buttonUrl) {
        const resultButton = document.createElement("a");
        resultButton.className = "result-button";
        resultButton.href = result.buttonUrl;
        resultButton.textContent = result.buttonText;
        nextStepBox.appendChild(resultButton);
    }

    if (result.secondaryText && result.secondaryUrl) {
        const br = document.createElement("br");
        const secondaryLink = document.createElement("a");
        secondaryLink.className = "secondary-cta-link";
        secondaryLink.href = result.secondaryUrl;
        secondaryLink.textContent = result.secondaryText;
        nextStepBox.appendChild(br);
        nextStepBox.appendChild(secondaryLink);
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
