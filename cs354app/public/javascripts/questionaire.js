//add form message class, set message as text content
function setFormMessage(formElement, type, message) {
    //select message within question form
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

//set messages on individual input fields
function setInputError(inputElement, message) {
    
    inputElement.classList.add("form__input--error");
    //begin with input field, go to parent, select input message, set text content
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

//remove messages on individual input fields
function clearInputError(inputElement) {

    inputElement.classList.remove("form__input--error");
    //begin with input field, go to parent, select input message, clear text content
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function validateForm() {
    let numberError, textError = false;

    for (let i = 1; i <= 4; i++) {
        let element = document.getElementById("answer_" + i);
        let answer = element.value;
        if(isNaN(answer) || answer < 1 || answer > 5) {
            setInputError(element, "Not a number between 1 and 5.");
            numberError = true;
        }
    }

    let textValue = document.getElementById("answer_5").value;

    if (textValue == "") {
        textError = true;
    }

    if (numberError && textError) {
        setFormMessage(questionaireForm, "error", "One of your 1-5 ratings is not a number, and your text input is empty.");
    } else if (numberError) {
        setFormMessage(questionaireForm, "error", "One of your 1-5 ratings is not a number.");
    } else if (textError) {
        setFormMessage(questionaireForm, "error", "You left the last question blank.");
    } else {
        document.questionaireForm.submit();
    }
}