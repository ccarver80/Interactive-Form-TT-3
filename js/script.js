//Declare all elements
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const otherJobRole = document.getElementById("other-job-role");
const jobTitle = document.getElementById("title");
const tshirtColor = document.getElementById("color");
const designChoice = document.getElementById("design");
const activities = document.getElementById("activities");
const totalActivities = document.getElementById("activities-cost");
const activitiesCheckbox = document.querySelectorAll('input[type="checkbox"]');
const payment = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const zipcode = document.getElementById("zip");
const ccNum = document.getElementById("cc-num");
const cvvNum = document.getElementById("cvv");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const form = document.querySelector("form");

//sets focus to start at Name field on startup
nameField.focus();

//hides other job role feild
otherJobRole.style.display = "none";

// Display Other job role field when "other" is selected
jobTitle.addEventListener("change", (e) => {
  if (e.target.value == "other") {
    otherJobRole.style.display = "";
  } else {
    otherJobRole.style.display = "none";
  }
});

//disables dropdown menu for color on startup
tshirtColor.disabled = true;

designChoice.addEventListener("change", (e) => {
  if (e.target.value == "heart js") {
    //enables dropdown menu, and if something was previously selected resets menu to default "select a design theme above".
    tshirtColor.disabled = false;
    tshirtColor.selectedIndex = "0";

    //loops through the child nodes and displays the I "heart" Js shirts only
    for (let i = 9; i <= 13; i += 2) {
      tshirtColor.childNodes[i].style.display = "";
    }
    //loops though the child nodes and hides the "js puns shirts"
    for (let i = 3; i <= 7; i += 2) {
      tshirtColor.childNodes[i].style.display = "none";
    }
  }

  if (e.target.value == "js puns") {
    //enables dropdown menu, and if something was previously selected resets menu to default "select a design theme above".
    tshirtColor.disabled = false;
    tshirtColor.selectedIndex = "0";

    // loops through and shows the "js puns" shirts
    for (let i = 3; i <= 7; i += 2) {
      tshirtColor.childNodes[i].style.display = "";
    }

    //loops through and hides the "i heart js" shirts
    for (let i = 9; i <= 13; i += 2) {
      tshirtColor.childNodes[i].style.display = "none";
    }
  }
});

/*

  Payment section

*/

// shows "credit card" as default when pages loads
payment[1].selected = true;

paypal.style.display = "none";
bitcoin.style.display = "none";

// Hides and displays the information for field selected
payment.addEventListener("change", (e) => {
  if (payment[1].selected == true) {
    creditCard.style.display = "block";
    paypal.style.display = "none";
    bitcoin.style.display = "none";
  }

  if (payment[2].selected == true) {
    creditCard.style.display = "none";
    paypal.style.display = "block";
    bitcoin.style.display = "none";
  }

  if (payment[3].selected == true) {
    creditCard.style.display = "none";
    paypal.style.display = "none";
    bitcoin.style.display = "block";
  }
});

/*

  Form Validation 

*/

const nameHint = document.getElementById("name-hint");
const emailHint = document.getElementById("email-hint");
const activitiesHint = document.getElementById("activities-hint");
const ccNumHint = document.getElementById("cc-hint");
const zipHint = document.getElementById("zip-hint");
const cvvHint = document.getElementById("cvv-hint");
const nameRegex = /\w+/; //validates at least 1 character is enterd in name field
const emailRegex = /\w+\.?\w+@\w+\.\w+\.?\w+/; //validates basic email's like "abc@def.com", "abc.def@ghk.com" and "abc@def.com.uk"
const creditNumberRegex = /\d{13,16}/; //validates creditcard # is between 13 and 16 digits long
const zipCodeRegex = /\d{5}/; //validates zipcode is 5 digits long
const cvvRegex = /\d{3}/; //validates CVV code is 3 digits long


// Validates in real time when user goes to start typing "Name" 
nameField.addEventListener('keyup', (e) => {
  if (nameRegex.test(nameField.value) == false) {
    nameField.parentNode.classList.add("not-valid");
    nameHint.style.display = "block";
  } else {
    nameField.parentNode.classList.remove("not-valid");
    nameField.parentNode.classList.add("valid");
    nameHint.style.display = "none";
  }
})

//Validates in real time when user goes to start typing "Email" 
emailField.addEventListener('keyup', (e) => {

  if (emailRegex.test(emailField.value) == false) {
    emailField.parentNode.classList.add("not-valid");
    emailHint.style.display = "block";
  } else {
    emailField.parentNode.classList.remove("not-valid");
    emailField.parentNode.classList.add("valid");
    emailHint.style.display = "none";
  }

})

//Validates entire form when submitted
form.addEventListener("submit", (e) => {

  //Name Validation
  if (nameRegex.test(nameField.value) == false) {
    
    e.preventDefault()
    nameField.parentNode.classList.add("not-valid");
    nameHint.style.display = "block";
  } else {
    nameField.parentNode.classList.remove("not-valid");
    nameField.parentNode.classList.add("valid");
    nameHint.style.display = "none";
  }

  //Email Validation
  if (emailRegex.test(emailField.value) == false) {
    if (emailField.value === '') {
      alert("Email field cannot be blank");
    } else {
      alert('Email address is not correct, please try to format again');
    }
    e.preventDefault();
    emailField.parentNode.classList.add("not-valid");
    emailHint.style.display = "block";
  } else {
    emailField.parentNode.classList.remove("not-valid");
    emailField.parentNode.classList.add("valid");
    emailHint.style.display = "none";
  }
  
  //Check box Validation
  let checkbox = "false";
  for (let i = 0; i < activitiesCheckbox.length; i++) {
    if (activitiesCheckbox[i].checked == true) {
      checkbox = "true";
      break;
    }
  }
  if (checkbox === "false") {
    e.preventDefault();
    activities.classList.add("not-valid");
    activitiesHint.style.display = "block";
  } else {
    activities.classList.remove("not-valid");
    activities.classList.add("valid");
    activitiesHint.style.display = "none";
  }

  // Credit Card Validation
  if (payment.value === "credit-card") { //makes sure credit card is selected
  
    //validates credit card number
    if (creditNumberRegex.test(ccNum.value) == false) {
      e.preventDefault();
      ccNum.parentNode.classList.add("not-valid");
      ccNumHint.style.display = "block";
    } else {
      ccNum.parentNode.classList.remove("not-valid");
      ccNumHint.parentNode.classList.add("valid");
      ccNumHint.style.display = "none";
    }

    // validates zipcode
    if (zipCodeRegex.test(zipcode.value) == false) {
      e.preventDefault();
      zipcode.parentNode.classList.add("not-valid");
      zipHint.style.display = "block";
    } else {
      zipcode.parentNode.classList.remove("not-valid");
      zipcode.parentNode.classList.add("valid");
      zipHint.style.display = "none";
    }

    // validates CVV code
    if (cvvRegex.test(cvvNum.value) == false) {
      e.preventDefault();
      cvvNum.parentNode.classList.add("not-valid");
      cvvHint.style.display = "block";
    } else {
      cvvNum.parentNode.classList.remove("not-valid");
      cvvNum.parentNode.classList.add("valid");
      cvvHint.style.display = "none";
    }
  }
});

/*

    Accessibility

*/

activities.addEventListener("focusin", (e) => {
  e.target.parentNode.classList.add("focus");
});

activities.addEventListener("focusout", (e) => {
  e.target.parentNode.classList.remove("focus");
});

/*

  EXTRA Credit

*/

//Prevent users from registering for conflicting activities

activities.addEventListener("change", (e) => {
  if (e.target.checked == true) {
    for (let i = 1; i < activitiesCheckbox.length; i++) {
      if (
        activitiesCheckbox[i].dataset.dayAndTime === e.target.dataset.dayAndTime
      ) {
        activitiesCheckbox[i].parentNode.classList.add("disabled");
        e.target.parentNode.classList.remove("disabled");

        if (activitiesCheckbox[i].parentNode.classList == "disabled") {
          activitiesCheckbox[i].checked = false;
        }
      }
    }
  } else {
    for (let i = 1; i < activitiesCheckbox.length; i++) {
      if (
        activitiesCheckbox[i].dataset.dayAndTime === e.target.dataset.dayAndTime
      ) {
        activitiesCheckbox[i].parentNode.classList.remove("disabled");
      }
    }
  }

     /*
        ADD COST TOTAL

      */

  let costTotal = parseInt("0");
  for (let i = 0; i < activitiesCheckbox.length; i++) {
    //adds total for if event is checked
    if (activitiesCheckbox[i].checked == true) {
      costTotal += parseInt(activitiesCheckbox[i].dataset.cost);
    }
  }
  totalActivities.innerHTML = `<p>Total: $${costTotal}</p>`;
});
