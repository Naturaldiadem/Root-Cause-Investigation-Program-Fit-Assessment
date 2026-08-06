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
/* ==========================================
   ATTACH OPTION EVENTS
========================================== */

function attachOptionEvents() {

    const labels =
        document.querySelectorAll(".option");

    labels.forEach(label => {

        const input =
            label.querySelector("input");

        label.addEventListener("click", () => {

            const question =
                questions[currentQuestion];

            if (question.type === "radio") {

                labels.forEach(l =>
                    l.classList.remove("selected"));

                label.classList.add("selected");

                input.checked = true;

            }

            else {

                input.checked = !input.checked;

                label.classList.toggle(
                    "selected",
                    input.checked
                );

            }

            saveCurrentAnswer();

        });

    });

}
/* ==========================================
   SAVE CURRENT ANSWER
========================================== */

function saveCurrentAnswer() {

    const question =
        questions[currentQuestion];

    if (question.type === "radio") {

        const selected =
            document.querySelector(
                `input[name="question${question.id}"]:checked`
            );

        if (selected) {

            answers[question.id] =
                selected.value;

        }

    }

    else {

        answers[question.id] = [];

        document
            .querySelectorAll(
                `input[name="question${question.id}"]:checked`
            )
            .forEach(input => {

                answers[question.id]
                    .push(input.value);

            });

    }

}
