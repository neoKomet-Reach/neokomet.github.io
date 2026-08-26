
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

const question = item.querySelector(".faq-question");
const answer = item.querySelector(".faq-answer");

question.addEventListener("click", () => {

    const isOpen = item.classList.contains("active");

    // Close all FAQ items
    faqItems.forEach((faq) => {
    faq.classList.remove("active");
    faq.querySelector(".faq-answer").style.maxHeight = null;
    });

    // Open clicked FAQ
    if (!isOpen) {
    item.classList.add("active");
    answer.style.maxHeight = answer.scrollHeight + "px";
    }

});

});

const form = document.getElementById("inquiryForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const googleName = document.getElementById("googleName");

const otherService = document.getElementById("otherService");
const otherServiceText = document.getElementById("otherServiceText");

/*


/*
* Submit the form
*/
form.addEventListener("submit", function () {

/*

/*
    * Disable button to prevent double submission
    */
const submitButton =
    form.querySelector(".form-submit");

submitButton.disabled = true;

submitButton.innerHTML = `
    Sending...
`;


/*
    * Google Forms receives the submission
    * through the hidden iframe.
    *
    * Give it a moment, then show success.
    */
setTimeout(function () {

    form.style.display = "none";

    const success =
    document.getElementById("formSuccess");

    if (success) {
    success.classList.add("show");
    }

}, 1000);

});

