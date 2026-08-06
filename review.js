/* ==========================================
   NATURAL DIADEM
   REVIEW SCREEN
========================================== */

function buildReview() {

    reviewContainer.innerHTML = "";

    questions.forEach(question => {

        const item = document.createElement("div");

        item.className = "review-item";

        let answer = answers[question.id];

        if (!answer || answer.length === 0) {

            answer = "<em>No answer provided</em>";

        } else if (Array.isArray(answer)) {

            answer = answer.join("<br>");

        }

        item.innerHTML = `

            <div class="review-question">

                <strong>${question.title}</strong>

            </div>

            <div class="review-answer">

                ${answer}

            </div>

            <hr>

        `;

        reviewContainer.appendChild(item);

    });

}
