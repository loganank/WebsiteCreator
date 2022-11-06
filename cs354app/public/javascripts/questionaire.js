//takes in question form, success or error, and message
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

//when document is ready to be worked with, run function, 
//get reference to questionaire form
document.addEventListener("DOMContentLoaded", () => {
    
    const questionaireForm = document.querySelector("#questionaire_form");

    //listen for submit event in questionaire form
    questionaireForm.addEventListener("submit", e => {
        //prevent form from being submitted through page refresh or submission
        e.preventDefault();

        let numberError, textError = false;

        for (let i = 1; i <= 4; i++) {
            let element = document.getElementById("answer_" + i);
            let answer = element.value;
            if(isNaN(answer) || answer < 1 || answer > 5) {
                setInputError(element, "Not a number between 1 and 5.");
                numberError = true;
                //setFormMessage(questionaireForm, "error", "One of your 1-5 ratings is not a number.");
            }
            console.log(isNaN(answer));
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
            // nothing is wrong, go to next page
            window.location.replace("index.html")
        }
    });

    //select all input elements, for each element
    document.querySelectorAll(".form__input").forEach(inputElement => {
        //clear errors that are set in input field when user types inside field
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
            console.log("clear")
        });
    });
});