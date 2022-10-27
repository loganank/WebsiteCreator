var skill = document.getElementById('newSkill');

if(skill){
    skill.addEventListener('click', generateSkills);
}

function generateSkills(){
    var fieldset = document.getElementById("fieldset1");
    var label = document.createElement("label");
    label.for = "job";
    label.textContent="Skill";
    fieldset.appendChild(label);
}