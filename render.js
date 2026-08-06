/* ==========================================
   NATURAL DIADEM
   RENDER QUESTIONS
========================================== */

function renderQuestion() {

    updateProgress();

    const question = questions[currentQuestion];

    let html = `
        <div class="question-title">
            ${question.title}
        </div>
    `;

    if (question.subtitle) {
        html += `
            <div class="question-subtitle">
                ${question.subtitle}
            </div>
        `;
    }

    html += `<div class="options">`;

    question.options.forEach((option, index) => {

        let checked = false;

        if (question.type === "radio") {

            checked = answers[question.id] === option;

        } else {

            checked =
                answers[question.id] &&
                answers[question.id].includes(option);

        }

        html += `

        <label class="option ${checked ? "selected" : ""}">

            <input
                type="${question.type}"
                name="question${question.id}"
                value="${option}"
                ${checked ? "checked" : ""}>

            ${option}

        </label>

        `;

    });

    html += `</div>`;

    questionContainer.innerHTML = html;

    attachOptionEvents();

    previousBtn.style.display =
        currentQuestion === 0
            ? "none"
            : "inline-block";

}
