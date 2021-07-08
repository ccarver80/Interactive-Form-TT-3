const nameField = document.getElementById('name');
const otherJobRole = document.getElementById('other-job-role');
const jobTitle = document.getElementById('title');
const tshirtColor = document.getElementById('color');
const designChoice = document.getElementById('design');



nameField.focus();
otherJobRole.style.display = 'none';


// Display Other job role field when "other" is selected
jobTitle.addEventListener("change", e => {
    if (e.target.value == "other") {
        otherJobRole.style.display = "";
    } else {
        otherJobRole.style.display = "none";
    }
} )

tshirtColor.disabled = true; 

designChoice.addEventListener("change", e => {
   if (e.target.value == 'js puns') {
       tshirtColor.disabled = false; 
        

   }
})
