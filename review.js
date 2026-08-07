function createSubmissionData(result) {

    return {

        submittedAt:
            new Date().toISOString(),

        firstName:
            assessmentState.contact.firstName || "",

        lastName:
            assessmentState.contact.lastName || "",

        email:
            assessmentState.contact.email || "",

        answers: {
            "1": getAnswer(1) || "",
            "2": getAnswer(2) || "",
            "3": getAnswer(3) || "",
            "4": getAnswer(4) || "",
            "5": getAnswer(5) || "",
            "6": getAnswer(6) || "",
            "7": getAnswer(7) || "",
            "8": getAnswer(8) || "",
            "9": getAnswer(9) || ""
        },

        result:
            result && result.title
                ? result.title
                : "",

        resultKey:
            result && result.key
                ? result.key
                : ""

    };

}
