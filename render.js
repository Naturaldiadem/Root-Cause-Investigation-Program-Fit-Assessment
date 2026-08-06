/* ==========================================
   NATURAL DIADEM
   PROGRAM FIT ASSESSMENT
   RENDER.JS
========================================== */

"use strict";

/* ==========================================
   QUESTION RENDERING
========================================== */

function renderQuestion() {
    const question = getCurrentQuestion();

    if (!question) {
        return;
    }

    questionContainer.innerHTML = "";

    updateProgressDisplay(question);
    updateNavigationDisplay();

    const questionCard = document.createElement("div");
    questionCard.className = "question-card";

    const questionHeader = document.createElement("div");
    questionHeader.className = "question-header";

    const questionTitle = document.createElement("h2");
    questionTitle.className = "question-title";
    questionTitle.textContent = question.title;

    questionHeader.appendChild(questionTitle);

    if (question.subtitle) {
        const questionSubtitle = document.createElement("p");
        questionSubtitle.className = "question-subtitle";
        questionSubtitle.textContent = question.subtitle;

        questionHeader.appendChild(questionSubtitle);
    }

    questionCard.appendChild(questionHeader);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    question.options.forEach(function (option, optionIndex) {
        const optionElement = createOptionElement(
            question,
            option,
            optionIndex
        );

        optionsContainer.appendChild(optionElement);
    });

    questionCard.appendChild(optionsContainer);
    questionContainer.appendChild(questionCard);

    focusFirstOption();
}

/* ==========================================
   OPTION CREATION
========================================== */

function createOptionElement(question, option, optionIndex) {
    const optionLabel = document.createElement("label");
    optionLabel.className = "option";

    const optionInput = document.createElement("input");

    optionInput.type = question.type;
    optionInput.name = "question-" + question.id;
    optionInput.value = option;
    optionInput.id =
        "question-" +
        question.id +
        "-option-" +
        optionIndex;

    if (isOptionSelected(question, option)) {
        optionInput.checked = true;
        optionLabel.classList.add("selected");
    }

    const optionText = document.createElement("span");
    optionText.className = "option-text";
    optionText.textContent = option;

    optionLabel.appendChild(optionInput);
    optionLabel.appendChild(optionText);

    optionInput.addEventListener("change", function () {
        handleOptionChange(
            question,
            option,
            optionInput,
            optionLabel
        );
    });

    return optionLabel;
}

/* ==========================================
   SELECTED STATE
========================================== */

function isOptionSelected(question, option) {
    const savedAnswer = getAnswer(question.id);

    if (question.type === "checkbox") {
        return (
            Array.isArray(savedAnswer) &&
            savedAnswer.includes(option)
        );
    }

    return savedAnswer === option;
}

/* ==========================================
   OPTION CHANGE HANDLING
========================================== */

function handleOptionChange(
    question,
    option,
    optionInput,
    optionLabel
) {
    clearValidationMessage();

    if (question.type === "radio") {
        handleRadioSelection(
            question,
            option,
            optionInput
        );

        updateSelectedOptionStyles();

        return;
    }

    handleCheckboxSelection(
        question,
        option,
        optionInput
    );

    updateSelectedOptionStyles();
}

/* ==========================================
   RADIO ANSWERS
========================================== */

function handleRadioSelection(
    question,
    option,
    optionInput
) {
    if (!optionInput.checked) {
        return;
    }

    saveAnswer(question.id, option);
}

/* ==========================================
   CHECKBOX ANSWERS
========================================== */

function handleCheckboxSelection(
    question,
    option,
    optionInput
) {
    let selectedAnswers = getAnswer(question.id);

    if (!Array.isArray(selectedAnswers)) {
        selectedAnswers = [];
    }

    const exclusiveOptions = [
        "None of the above",
        "None of these",
        "I haven't tried anything yet"
    ];

    const isExclusiveOption =
        exclusiveOptions.includes(option);

    if (optionInput.checked) {
        if (isExclusiveOption) {
            selectedAnswers = [option];

            uncheckOtherOptions(option);
        } else {
            selectedAnswers = selectedAnswers.filter(
                function (selectedOption) {
                    return !exclusiveOptions.includes(
                        selectedOption
                    );
                }
            );

            uncheckExclusiveOptions(exclusiveOptions);

            if (!selectedAnswers.includes(option)) {
                selectedAnswers.push(option);
            }
        }
    } else {
        selectedAnswers = selectedAnswers.filter(
            function (selectedOption) {
                return selectedOption !== option;
            }
        );
    }

    if (selectedAnswers.length > 0) {
        saveAnswer(question.id, selectedAnswers);
    } else {
        removeAnswer(question.id);
    }
}

/* ==========================================
   CHECKBOX EXCLUSIVITY
========================================== */

function uncheckOtherOptions(selectedOption) {
    const inputs = questionContainer.querySelectorAll(
        'input[type="checkbox"]'
    );

    inputs.forEach(function (input) {
        if (input.value !== selectedOption) {
            input.checked = false;
        }
    });
}

function uncheckExclusiveOptions(exclusiveOptions) {
    const inputs = questionContainer.querySelectorAll(
        'input[type="checkbox"]'
    );

    inputs.forEach(function (input) {
        if (exclusiveOptions.includes(input.value)) {
            input.checked = false;
        }
    });
}

/* ==========================================
   OPTION VISUAL STATE
========================================== */

function updateSelectedOptionStyles() {
    const options = questionContainer.querySelectorAll(
        ".option"
    );

    options.forEach(function (optionLabel) {
        const input = optionLabel.querySelector("input");

        if (input && input.checked) {
            optionLabel.classList.add("selected");
        } else {
            optionLabel.classList.remove("selected");
        }
    });
}

/* ==========================================
   PROGRESS DISPLAY
========================================== */

function updateProgressDisplay(question) {
    const totalSections = getTotalSections();
    const currentQuestionNumber =
        assessmentState.currentQuestionIndex + 1;
    const totalQuestions = questions.length;
    const progressPercentage =
        (currentQuestionNumber / totalQuestions) * 100;

    sectionLabel.textContent =
        "Section " +
        question.section +
        " of " +
        totalSections;

    sectionTitle.textContent =
        question.sectionTitle;

    questionNumber.textContent =
        "Question " +
        currentQuestionNumber +
        " of " +
        totalQuestions;

    progressFill.style.width =
        progressPercentage + "%";

    progressFill.setAttribute(
        "aria-valuenow",
        String(Math.round(progressPercentage))
    );

    progressFill.setAttribute(
        "aria-valuemin",
        "0"
    );

    progressFill.setAttribute(
        "aria-valuemax",
        "100"
    );
}

/* ==========================================
   NAVIGATION DISPLAY
========================================== */

function updateNavigationDisplay() {
    const isFirstQuestion =
        assessmentState.currentQuestionIndex === 0;

    const isLastQuestion =
        assessmentState.currentQuestionIndex ===
        questions.length - 1;

    previousButton.disabled = isFirstQuestion;

    previousButton.classList.toggle(
        "hidden",
        isFirstQuestion
    );

    nextButton.textContent =
        isLastQuestion
            ? "Review Responses"
            : "Next";
}

/* ==========================================
   ACCESSIBILITY
========================================== */

function focusFirstOption() {
    const firstInput = questionContainer.querySelector(
        "input"
    );

    if (!firstInput) {
        return;
    }

    window.setTimeout(function () {
        firstInput.focus({
            preventScroll: true
        });
    }, 100);
}
