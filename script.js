const container = document.querySelector('.container')
const emailForm = document.querySelector('form');
const emailInput = document.querySelector(".email");
const span = document.querySelector("span")
const thanks = document.querySelector(".thanks");
const thankstext = document.querySelector('.thanks-text');

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

emailForm.addEventListener("submit", function (e) {
    e.preventDefault();
    isEmailAddress();
});

function isEmailAddress() {
    const email = emailInput.value;
    
    if (pattern.test(email)) {
        container.style.display = "none";
        thanks.style.display = "block";   
        thankstext.innerHTML = `  A confirmation email has been sent to <b>${email}</b>.
        Please open it and click the button inside to confirm your subscription.`
    } else {
        container.style.display = "flex";
        thanks.style.display = "none";
        span.style.display = "block";
        emailInput.style.border = "1px solid var(--error)";
        emailInput.style.color = "var(--error)";
        emailInput.style.background = "var(--error-bg)";
    }
}   
