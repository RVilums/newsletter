const submitBtn = document.querySelector('[data-id="submitBtn"]');
const form = document.querySelector('[data-id="form"]');
const emailInput = document.querySelector('[data-id="emailInput"]');
const errorMessage = document.querySelector('[data-id="errorMessage"]')
const modal = document.querySelector('[data-id="modal"]')
const closeModalBtn = document.querySelector('[data-id="closeModalBtn"]')

const openModal = () => {
    modal.classList.toggle('hidden')
}


const emailValidation = (email) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
        emailInput.classList.remove('error')
        errorMessage.classList.add('hidden')
        return true
    }
    else {
        emailInput.classList.add('error')
        errorMessage.classList.remove('hidden')
        return false
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value;
    if (emailValidation(email))
        console.log(`WORKS ${email}`);
    else
        console.log(`doesn''t work`)
});

submitBtn.addEventListener("click", (e) => {
    openModal();
});
