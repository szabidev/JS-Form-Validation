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
let textarea = document.getElementById('message');
// let radioBtn = document.querySelector('input[name="radio"]:checked');
// let firstRadioBtn = document.getElementById('male').checked;
// let secondRadioBtn = document.getElementById('female').checked;
// console.log(firstRadioBtn.value, secondRadioBtn.value);
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
    let radios = document.getElementsByName('radio');
    value = '';
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            value = radios[i].value;
            console.log(value);
            break;
        }
    }
    let firstNameInput = firstName.value;
    let lastNameInput = lastName.value;
    let text = textarea.value;
    if (firstNameInput === '' || lastNameInput === '' || text === '' || !value) {
        firstName.className = 'invalid';
        lastName.className = 'invalid';
        textarea.className = 'invalid';
        successMsg.style.backgroundColor = '#e63946';
        successMsg.style.visibility = 'visible';
        successMsg.innerText = `Please fill in all the required fields`

    }

    if (firstNameInput !== '' && lastNameInput !== '' && text !== '' && value) {
        firstName.className = 'valid';
        lastName.className = 'valid';
        textarea.className = 'valid';
        successMsg.style.backgroundColor = '#52b788';
        successMsg.style.visibility = 'visible';
        successMsg.innerText = `Thank you for your message ${firstNameInput} ${lastNameInput}`
    }


    console.log(`${firstName.value} ${lastName.value} \n Gender: ${value} \n Message: ${message.value}`)
}


