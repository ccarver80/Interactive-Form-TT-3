//Declare all elements
const nameField = document.getElementById("name");
const otherJobRole = document.getElementById("other-job-role");
const jobTitle = document.getElementById("title");
const tshirtColor = document.getElementById("color");
const designChoice = document.getElementById("design");
const activities = document.getElementById('activities');
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin')

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

    Checkbox and cost total

*/
let costTotal = parseInt("0");

//adds total for if event is checked 

activities.addEventListener("change", (e) => {
if (e.target.checked == true) {
  costTotal += parseInt(e.target.dataset.cost);
}
if(e.target.checked == false) {
  costTotal -= parseInt(e.target.dataset.cost);
}
totalActivities.innerHTML = `<p>Total: $${costTotal}</p>`
})


/*

  Payment section

*/ 

// shows "credit card" as default when pages loads 
payment[1].selected = true; 

paypal.style.display = 'none';
bitcoin.style.display = 'none';


// Hides and displays the information for field selected 
payment.addEventListener('change', (e) => {
  if (payment[1].selected == true) {
    creditCard.style.display = 'block';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
  }

   if (payment[2].selected == true) {
    creditCard.style.display = 'none';
    paypal.style.display = 'block';
    bitcoin.style.display = 'none';
  }

  if (payment[3].selected == true) {
    creditCard.style.display = 'none';
    paypal.style.display = 'none';
    bitcoin.style.display = 'block';
  }
})
