const sendButton = document.querySelector('.form__btn')
const inputPassword = document.querySelector('#password')
const checkPassword = document.querySelector('#confirmPassword')
const formInfoAlert = document.querySelector('.form__alert')
const form = document.querySelector('.registration-form')

sendButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(inputPassword.value);
    console.log(checkPassword.value);
    if (inputPassword.value === checkPassword.value) {
        form.submit()
    } else {
        formInfoAlert.style.visibility = 'inherit'
        inputPassword.classList.add('invalid')
        checkPassword.classList.add('invalid')
    }
})