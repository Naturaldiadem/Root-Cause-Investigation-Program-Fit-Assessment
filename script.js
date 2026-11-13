const assessmentState = {
    currentQuestionIndex: 0,
    answers: {},
    contact: {
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        region: "",
        postalCode: ""
    },
    submitted: false
};


/* CONTACT & LOCATION INPUTS */
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const regionInput = document.getElementById("region");
const postalCodeInput = document.getElementById("postal-code");
const contactValidationMessage = document.getElementById("contact-validation-message");



function validateContactInformation() {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const country = countryInput.value.trim();
    const region = regionInput.value.trim();
    const postalCode = postalCodeInput.value.trim();

    clearContactValidationMessage();

    if (!firstName || !lastName || !email || !country || !region || !postalCode) {
        showContactValidationMessage(
            "Please complete all fields (name, email, country/territory, city/state, and postal/ZIP code) so we can verify resource shipping."
        );
        return false;
    }

    if (!isValidEmail(email)) {
        showContactValidationMessage("Please enter a valid email address.");
        return false;
    }

    assessmentState.contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        region: region,
        postalCode: postalCode
    };

    return true;
}
