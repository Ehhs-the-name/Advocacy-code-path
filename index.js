// Header nonsense
window.onscroll = function() { myFunction() };

var header = document.getElementById("nav-container");
// var banner = document.getElementById("banner");
var bannerHeight = document.getElementById('banner').offsetHeight;
const mainContentContainer = document.getElementById("main-content");
var sticky = header.offsetTop;

console.log(mainContentContainer);

function myFunction() {
	if (window.scrollY > sticky + bannerHeight) {
		header.classList.add("sticky");
		banner.style.visiblity = "hidden";
		mainContentContainer.classList.add("smooth-nav-transition");
	}
	else {
		header.classList.remove("sticky");
		mainContentContainer.classList.remove("smooth-nav-transition");
	}
}


// button "show more" code
// It works now :)
let dropdown = document.getElementById("stats-drop-button");

let showRest = () => {
	let breakDown = document.getElementById("stats-breakdown");
	breakDown.classList.toggle("show-rest");
	console.log("button clicked!!");
}

dropdown.addEventListener("click", showRest);


// Dark Mode code
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
	document.body.classList.toggle("dark-mode");

	// not working yet 
	let topBanner = document.getElementById("banner");
	let navContainer = document.getElementById("nav-container");
	let disclamer = document.getElementById("disclamer");
	let statBig = document.getElementById("stats-big");
	let quizQuestionContainer = document.getElementById("quiz-question-container");
	
	let buttons = document.querySelectorAll("button");
	
	topBanner.classList.toggle("dark-mode-extra");
	navContainer.classList.toggle("nav-container-dark");
	disclamer.classList.toggle("dark-mode-extra");
	statBig.classList.toggle("dark-mode-extra");
	quizQuestionContainer.classList.toggle("dark-mode-extra");
	
	console.log(buttons.innerHTML);
	buttons.forEach(button => {
button.classList.toggle("button-dark");
	});
	
}

themeButton.addEventListener("click", toggleDarkMode);


// Form Code 
// Still need to check email validation
const submitRequest = (event) => {
	event.preventDefault();

	const fName = document.getElementById("fname").value;
	const lName = document.getElementById("lname").value;
	const email = document.getElementById("email-box").value;

	const cFName = fName.charAt(0).toUpperCase() + fName.slice(1);


	const cLName = lName.charAt(0).toUpperCase() + lName.slice(1);

	console.log(`${fName} ${lName} @ ${email} has signed the form!`);
	const submission = `${cFName} ${cLName} has signed the form!`

	console.log(submission + " <- Thing to put in <p>");



	console.log(form.innerText + " <-- The things from the signature form.")

	//grab signature's div
	const signatures = document.getElementById("signatures");

	// create new p tag

	const sigContainer = document.createElement("p");

	// add new p tag to the div
	signatures.appendChild(sigContainer);

	sigContainer.innerHTML = submission;

	const sigCounter = document.getElementById("counter");
	sigCounter.interHTML = sigContainer.length;

}
const form = document.getElementById('signature-form');

form.addEventListener("submit", submitRequest);
