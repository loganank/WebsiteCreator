var newSkill = document.getElementById('newSkill');

if(newSkill){
    newSkill.addEventListener('click', generateSkills);
}

// var limit = 10; // Max questions
// var count = 1; // There are 4 questions already

// function addQuestion()
// {
//     // Get the quiz form element
//     var fieldset = document.getElementById('fieldset1');

//     // Good to do error checking, make sure we managed to get something
//     if (fieldset)
//     {
//         if (count < limit)
//         {
//             // Create a new <p> element
//             var newP = document.createElement('select');
//             newP.innerHTML = 'Question ' + (count + 1);

//             // Create the new text box
//             var newInput = document.createElement('optgroup');
//             newInput.type = 'text';
//             newInput.name = 'questions[]';

//             // Good practice to do error checking
//             if (newInput && newP)   
//             {
//                 // Add the new elements to the form
//                 quiz.appendChild(newP);
//                 quiz.appendChild(newInput);
//                 // Increment the count
//                 count++;
//             }

//         }
//         else   
//         {
//             alert('Question limit reached');
//         }
//     }
// }

function generateSkills(){

    var skills = document.getElementById("skillsField");
    var label = document.createElement("label");
    label.for = "skill";
    // label.textContent="Skill:";
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "deleteButton";
    deleteButton.type = 'button';
    deleteButton.addEventListener('click', function() {
        label.remove();
        deleteButton.remove();
    })
    
    skills.appendChild(deleteButton);
    skills.appendChild(label);


    var select = document.createElement("select");
    select.className = "skill";
    select.name = "skills";
    label.appendChild(select);
   

    var optgroup = document.createElement("optgroup");
    optgroup.label="Skills";
    select.appendChild(optgroup);

    var option1 = document.createElement("option");
    option1.value = "JavaScript";
    option1.text = "JavaScript";
    optgroup.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "HTML5";
    option2.text = "HTML5";
    optgroup.appendChild(option2);

    var option3 = document.createElement("option");
    option3.value = "CSS";
    option3.text = "CSS";
    optgroup.appendChild(option3);

    var option4 = document.createElement("option");
    option4.value = "Java";
    option4.text = "Java";
    optgroup.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "Python";
    option5.text = "Python";
    optgroup.appendChild(option5);

    var option6 = document.createElement("option");
    option6.value = "C#";
    option6.text = "C#";
    optgroup.appendChild(option6);

    var option7 = document.createElement("option");
    option7.value = "PHP";
    option7.text = "PHP";
    optgroup.appendChild(option7);

    var option8 = document.createElement("option");
    option8.value = "Other";
    option8.text = "Other";
    optgroup.appendChild(option8);

    var optgroup2 = document.createElement("optgroup");
    optgroup2.label="Tools";
    select.appendChild(optgroup2);

    var toolopt1 = document.createElement("option");
    toolopt1.value = "Docker";
    toolopt1.text = "Docker";
    optgroup2.appendChild(toolopt1);

    var toolopt2 = document.createElement("option");
    toolopt2.value = "Git";
    toolopt2.text = "Git";
    optgroup2.appendChild(toolopt2);

    var toolopt3 = document.createElement("option");
    toolopt3.value = "Vim";
    toolopt3.text = "Vim";
    optgroup2.appendChild(toolopt3);

    var toolopt4 = document.createElement("option");
    toolopt4.value = "Linux";
    toolopt4.text = "Linux";
    optgroup2.appendChild(toolopt4);

    var toolopt5 = document.createElement("option");
    toolopt5.value = "MSSQL";
    toolopt5.text = "MSSQL";
    optgroup2.appendChild(toolopt5);

    var toolopt6 = document.createElement("option");
    toolopt6.value = "Selenium";
    toolopt6.text = "Selenium";
    optgroup2.appendChild(toolopt6);

    var toolopt7 = document.createElement("option");
    toolopt7.value = "NPM";
    toolopt7.text = "NPM";
    optgroup2.appendChild(toolopt7);

    var toolopt8 = document.createElement("option");
    toolopt8.value = "Other";
    toolopt8.text = "Other";
    optgroup2.appendChild(toolopt8);

}


  