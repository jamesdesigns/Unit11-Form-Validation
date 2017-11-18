/*jslint browser:true */
"use strict";

// Form validation function

function validateForm() {

  var status = true;

  // Reset. Removes all the "error" classes at the beginning of the validation process
  var requiredSections = ['fullName', 'phoneNumber', 'payMethod', 'ccNumber', 'vehicle'];
  var i;
  for (i=0; i<requiredSections.length; i++ ) {
    document.getElementById(requiredSections[i]).className = "normal";
  }

  if(requiredSections === "" || requiredSections=== null) {
          status = false;
          document.getElementById('formProblems').className = "error";
  }

  // Validate the Name
  var name;

  name = document.forms.myForm.fullName.value;
  if(name=== "" || name=== null) {
          status = false;
          document.getElementById('fullName').className = "error";
  }


  // Validate the Cell Number
  var number;

  number = document.forms.myForm.phoneNumber.value;
  number = number.replace(/-/g, '');
  console.log('>>>> ' + number);
  if(number.length < 10 || number.length > 15 ) {
          status = false;
          document.getElementById('phoneNumber').className = "error";
  }


  // Validate the Payment Method
  var payMethod;

  payMethod = document.getElementsByName('payMethod');
  var foundCheckedBtn = false;
  for (i=0; i<payMethod.length; i++) {
      if (payMethod[i].checked) {
        foundCheckedBtn = true;
        break;
      } // End of my if statement
  } // End of my for loop

  if(foundCheckedBtn === false ) {
        status = false;
        document.getElementById('payMethod').className = "error";
  }


  // Validate the Credit Card Number
  var ccNumber;

  ccNumber = document.forms.myForm.ccNumber.value;
  ccNumber = ccNumber.replace(/ /g, '');

  if(ccNumber.length != 15 ) {
          status = false;
          document.getElementById('ccNumber').className = "error";
  }


  // Validate the Vehicle
  var vehicle;

  vehicle = document.forms.myForm.vehicle.selectedIndex;
  if(vehicle === 0) {
          status = false;
          document.getElementById('vehicle').className = "error";
  }

  // Displays the Show Error Message if there are any errors within the form
  if (status === false) {
          document.getElementById('formProblems').className = "showErrorMsg";
  }

    return status;
}
