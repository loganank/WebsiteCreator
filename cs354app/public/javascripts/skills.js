var skill = document.getElementById('newSkill');
if(skill){
    skill.addEventListener('click', generateSkills);
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
    var fieldset = document.getElementById("fieldset1");
    var label = document.createElement("label");
    label.for = "job";
    label.textContent="Skills:";
    fieldset.appendChild(label);
    var select = document.createElement("select");
    select.id = "job1";
    select.name = "field6";
    label.appendChild(select);
    var optgroup = document.createElement("optgroup");
    optgroup.label="Skills";
    select.appendChild(optgroup);
    var option1 = document.createElement("option");
    option1.value = "javascriptval";
    option1.text = "JavaScript";
    optgroup.appendChild(option1);
    var option2 = document.createElement("option");
    option2.value = "htmlval";
    option2.text = "HTML5";
    optgroup.appendChild(option2);
    var option3 = document.createElement("option");
    option3.value = "cssval";
    option3.text = "CSS";
    optgroup.appendChild(option3);
    var option4 = document.createElement("option");
    option4.value = "javaval";
    option4.text = "Java";
    optgroup.appendChild(option4);
    var option5 = document.createElement("option");
    option5.value = "pythonval";
    option5.text = "Python";
    optgroup.appendChild(option5);
    var option6 = document.createElement("option");
    option6.value = "c#val";
    option6.text = "C#";
    optgroup.appendChild(option6);
    var option7 = document.createElement("option");
    option7.value = "phpval";
    option7.text = "PHP";
    optgroup.appendChild(option7);
    var option8 = document.createElement("option");
    option8.value = "otherval";
    option8.text = "Other";
    optgroup.appendChild(option8);
    var optgroup2 = document.createElement("optgroup");
    optgroup2.label="Tools";
    select.appendChild(optgroup2);
    var toolopt1 = document.createElement("option");
    toolopt1.value = "docker";
    toolopt1.text = "Docker";
    optgroup2.appendChild(toolopt1);
    var toolopt2 = document.createElement("option");
    toolopt2.value = "git";
    toolopt2.text = "Git";
    optgroup2.appendChild(toolopt2);
    var toolopt3 = document.createElement("option");
    toolopt3.value = "vim";
    toolopt3.text = "Vim";
    optgroup2.appendChild(toolopt3);
    var toolopt4 = document.createElement("option");
    toolopt4.value = "linux";
    toolopt4.text = "Linux";
    optgroup2.appendChild(toolopt4);
    var toolopt5 = document.createElement("option");
    toolopt5.value = "mssql";
    toolopt5.text = "MSSQL";
    optgroup2.appendChild(toolopt5);
    var toolopt6 = document.createElement("option");
    toolopt6.value = "selenium";
    toolopt6.text = "Selenium#";
    optgroup2.appendChild(toolopt6);
    var toolopt7 = document.createElement("option");
    toolopt7.value = "npm";
    toolopt7.text = "NPM";
    optgroup2.appendChild(toolopt7);
    var toolopt8 = document.createElement("option");
    toolopt8.value = "otherval";
    toolopt8.text = "Other";
    optgroup2.appendChild(toolopt8);
}

function removeSkill() {
    
}


// <select id="job" name="field5">
//   <optgroup label="Skills">
//     <option value="javascriptval">JavaScript</option>
//     <option value="htmlval">HTML5</option>
//     <option value="cssval">CSS</option>
//     <option value="javaval">Java</option>
//     <option value="pythonval">Python</option>
//     <option value="c#val">C#</option>
//     <option value="phpval">PHP</option>
//     <option value="otherval">Other</option>
//   </optgroup>
//   <optgroup label="Tools">
//     <option value="docker">Docker</option>
//     <option value="git">Git</option>
//     <option value="vim">Vim</option>
//     <option value="linux">Linux</option>
//     <option value="mssql">MSSQL</option>
//     <option value="selenium">Selenium</option>
//     <option value="otherval">Other</option>
//   </optgroup>
//   </select>      