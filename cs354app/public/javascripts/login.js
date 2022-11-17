//takes in loginform or createaccountform, success or error, and message
//add form message class, set message as text content
function setFormMessage(formElement, type, message) 
{
    //select message within given form (login or create account)
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

//set messages on individual input fields
function setInputError(inputElement, message) 
{
    
    inputElement.classList.add("form__input--error");
    //begin with input field, go to parent, select input message, set text content
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

//remove messages on individual input fields
function clearInputError(inputElement) 
{

    inputElement.classList.remove("form__input--error");
    //begin with input field, go to parent, select input message, clear text content
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

//when document is ready to be worked with, run function, 
//get reference to login and createaccount forms
document.addEventListener("DOMContentLoaded", () => 
{
    
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    //when you click create account link, hide login form, show create account form
    document.querySelector("#linkCreateAccount").addEventListener("click", e => 
    {
        //prevent default link to href
        e.preventDefault();
        //when click create account, hide login form
        loginForm.classList.add("form--hidden");
        //remove the hidden class thereby showing create account form
        createAccountForm.classList.remove("form--hidden");
    });

    //when you click login link, hide createaccount form, show login form 
    document.querySelector("#linkLogin").addEventListener("click", e => 
    {
        //prevent default link to href
        e.preventDefault();
        //when click login, remove login from hidden
        loginForm.classList.remove("form--hidden");
        //add createaccount to hidden
        createAccountForm.classList.add("form--hidden");
    });

    //upon submitting login form, grab event object
    loginForm.addEventListener("submit", e => 
    {
        //prevent form from being submitted through page refresh or submission
        e.preventDefault();
        
        

        let loginUsername=document.getElementById("loginUsername").value;
        let loginPassword=document.getElementById("loginPassword").value;
        
        
        
        if (loginUsername == "username" && loginPassword == "password")
        {
            alert("login successful!");
            window.location.replace("index.html")
            return false;
        }

        else {
            setFormMessage(loginForm, "error", "Invalid username/password");
        }
    });

    //upon submitting createaccount form, grab event object
    createAccountForm.addEventListener("submit", e => 
    {

        let username=document.getElementById("username").value;
        let email=document.getElementById("email").value;
        let pass=document.getElementById("pass").value;
        let pass2=document.getElementById("pass2").value;


        if (pass == pass2)
        {
            alert("password confirmation successful!");
            
            //when click login, remove login from hidden
            loginForm.classList.remove("form--hidden");
            //add createaccount to hidden
            createAccountForm.classList.add("form--hidden");
            //return false;
        }

        else {
            setFormMessage(createAccountForm, "error", "Password Confirmation Failed");
        }
    });

    //select all input elements, for each element
    document.querySelectorAll(".form__input").forEach(inputElement => 
        {
        //when user takes focus off input field 
        inputElement.addEventListener("blur", e => {
            //in create account, check if username has 0 < chars < 8, set error if not valid
            if (e.target.id === "username" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Username must be at least 8 characters");
            }
        });

        //clear errors that are set in input field when user types inside field
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});