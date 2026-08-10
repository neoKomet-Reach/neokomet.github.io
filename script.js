const form = document.getElementById("inquiryForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const googleName = document.getElementById("googleName");

const otherService = document.getElementById("otherService");
const otherServiceText = document.getElementById("otherServiceText");

/*
* Show/hide the "Other" service text field
*/
// otherService.addEventListener("change", function () {

// if (this.checked) {

//     otherServiceText.style.display = "block";
//     otherServiceText.required = true;

// } else {

//     otherServiceText.style.display = "none";
//     otherServiceText.required = false;
//     otherServiceText.value = "";

// }

// });


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