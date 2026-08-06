/* ==========================================
   NATURAL DIADEM
   RESULTS
========================================== */

const PREQUAL_URL =
"https://jnique-smith.mykajabi.com/root-cause-investigation-pre-qual";

// UPDATE THIS WHEN YOU HAVE THE FINAL URL
const LETTER_URL =
"#";

/* ==========================================
   SHOW RESULTS
========================================== */

function showResults(){

    reviewScreen.classList.add("hidden");

    resultsScreen.classList.remove("hidden");

    const finalQuestion = answers[9];

    let html = "";

    /* -----------------------------
       RESULT 1
    ------------------------------*/

    if(finalQuestion ===
        "I'm ready to apply for the Root Cause Investigation Program."){

        html = `

        <h2>
        You May Be a Good Fit
        </h2>

        <p>

        Based on your responses,
        it appears you're looking for
        more than a temporary solution.

        The Root Cause Investigation Program
        is designed for women who are ready
        to investigate what may be contributing
        to their hair and scalp concerns through
        a personalized, methodical process.

        </p>

        <a
            class="result-button"
            href="${PREQUAL_URL}">

            Continue to the
            Pre-Qualification Application

        </a>

        `;

    }

    /* -----------------------------
       RESULT 2
    ------------------------------*/

    else if(finalQuestion ===
        "I'm interested but I'd like to learn more first."){

        html = `

        <h2>

        Learn More First

        </h2>

        <p>

        Based on your responses,
        you may benefit from learning
        more about how your body can
        communicate through hair and
        scalp changes before deciding
        whether this program is right
        for you.

        </p>

        <a
            class="result-button"
            href="${LETTER_URL}">

            Read
            A Letter From Your Scalp

        </a>

        `;

    }

    /* -----------------------------
       RESULT 3
    ------------------------------*/

    else{

        html = `

        <h2>

        Please Seek Medical Care

        </h2>

        <p>

        If you're experiencing a medical
        emergency or feel you need
        immediate medical attention,
        please contact your healthcare
        provider or seek emergency care
        right away.

        This assessment is not intended
        to diagnose or treat medical
        conditions.

        </p>

        `;

    }

    resultsContent.innerHTML = html;

}
