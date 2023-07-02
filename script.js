const submitBtn = document.querySelector(`[data-id="submitBtn"]`)
const form = document.querySelector(`[data-id=""form"]`)
const emailInput = document.querySelector(`[data-id="emailInput"]`)

form.addEventListener("submit", e => {
    e.preventDefault()
    const email = emailInput.value
    console.log(email)

})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e.target)
})