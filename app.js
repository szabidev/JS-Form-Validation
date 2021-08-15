// When clicking the “Submit” button, you should validate the required fields , and display a
// red border around the input if validation fails.
// If user corrects the error, you should remove the red border.
// When the form is successfully submitted (no validation errors) you should display a
// Confirmation banner (which is hidden initially) containing the user’s first name that you
// just collected from the input fields. Also all the info from the input fields should be printed
// in the Console.


let contactForm = document.querySelector('.contact-form');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
// Why is it undefined????
// let radio = document.querySelectorAll('input[type=radio]:checked');
let textarea = document.getElementById('message');
let submitBtn = document.querySelector('.btn');
let successMsg = document.querySelector('.success-message');


// Not working with submit event
// submitBtn.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(e);
//     checkInputs();
//     console.log('Clicked');
// });

submitBtn.addEventListener('click', checkInputs);

function checkInputs() {
    let firstNameInput = firstName.value;
    let lastNameInput = lastName.value;
    let text = textarea.value;

    if (firstNameInput === '' && lastNameInput === '' && text === '') {
        firstName.className = 'invalid';
        lastName.className = 'invalid';
        textarea.className = 'invalid';
        successMsg.style.backgroundColor = '#e63946';
        successMsg.style.visibility = 'visible';
        successMsg.innerText = `Please fill in all the required fields`

    } else {
        firstName.className = 'valid';
        lastName.className = 'valid';
        textarea.className = 'valid';
        successMsg.style.backgroundColor = '#52b788';
        successMsg.style.visibility = 'visible';
        successMsg.innerText = `Thank you for your message ${firstNameInput} ${lastNameInput}`
    }
    console.log(`${firstName.value} ${lastName.value} \n Gender: \n Message: ${message.value}`)
}


