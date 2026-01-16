//Declare local variable in the function to be used as an argument in the function 
function validateForm(){
	//Variables are assigned to the values and are obtained from the HTML sign up file.
	let name = document.forms["Form"]["Name"].value;
	let surname = document.forms["Form"]["Surname"].value;
	let email = document.forms["Form"]["Email"].value;
	let phoneNum = document.forms["Form"]["phoneNum"].value;
	let age = document.forms["Form"]["age"].value;
	let gender = document.forms["Form"]["gender"].checked;

	//Call the functions for each input validation
	validateName(name);
	validateSurname(surname);
	validateEmail(email);
	validateNumber(phoneNum);
	validateAge();	
	validateGender();
	validateProvince();
}

//Validate to see if the input control is empty or not. 
function validateName(name){
	if (name==""){
		alert("Please enter a Name");
		return false;
	}
}

//Validate if user has entered a surname
function validateSurname(surname){
	if (surname==""){
		alert("Please enter a Surname");
		return false;
	}
}

//Validate to see if email address is valid or not
function validateEmail(email) {
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
	if (Email.value.match(validRegex)) {
		alert("Valid email address!");
		return true;
	} 
	else {		
		alert("Invalid email address!");
		return false;
	}
}
//Validate to see if phone number is entered
function validateNumber(phoneNum) {
	var numbers = /^[0-9]+$/;
	if(phoneNum.value.match(numbers)) {
		alert('Your contact number is valid');
		return true;
    } else {
		alert('Please input numeric characters only in the the Contact Number');
		return false;
     }
}
//Validate Age is within the range
function validateAge(){
	let text = "Age okay";
	if (document.getElementById(age).validity.rangeOverflow){
		text = "Value too large"
	}
}

//Validate the if the user selected an option for gender or not
const checkboxes = document.getElementsByName("gender");

let isChecked = false;
for (let i = 0; i < checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    isChecked = true;
    break;
  } else {
  alert("Please select at least one option");
}
}

//Validate if a province is selected or not
function validateProvince(){
const dropdown = document.getElementById("province");
const selectedIndex = dropdown.selectedIndex;

if (selectedIndex === 0) {
  alert("Please select an option");
} 
}