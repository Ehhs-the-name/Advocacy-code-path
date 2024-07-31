// Header nonsense
window.onscroll = function() { myFunction() };

function alwaysFixedNav() {
	header.classList.remove("sticky");
}

window.addEventListener('load', alwaysFixedNav);

var header = document.getElementById("nav-container");
// var banner = document.getElementById("banner");
var bannerHeight = document.getElementById('banner').offsetHeight;
const mainContentContainer = document.getElementById("main-content");
var sticky = header.offsetTop;

// console.log(mainContentContainer);

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
	console.log("hello")
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

	// console.log(buttons.innerHTML);
	buttons.forEach(button => {
		button.classList.toggle("button-dark");
	});

}

themeButton.addEventListener("click", toggleDarkMode);


// Form Code 
const formContainer = document.getElementById('signature-form-container');
const form = document.getElementById('signature-form');
let errorHolder = document.getElementById('error-message');

const validateForm = (event) => {
	event.preventDefault();

	let checker = true;
	let elements = form.elements;

	for (let i = 0; i < 2; i++) {
		if (elements[i].value === "") {
			let error = document.createElement("p");
			error.innerText = "Please fill out the " + elements[i].name + " field.";
			errorHolder.appendChild(error);

			console.log("Please fill out the " + elements[i].name + " field.");

			elements[i].style.border = "3px dashed red";
			elements[i].style.backgroundColor = "#fcc";
			checker = false;

		} else {
			console.log(elements[i].name + " is filled out.");
			elements[i].style.border = "solid 1px #ccc";
			elements[i].style.backgroundColor = "#fff";
		}
	}
	if (checker === false) {
		checker = true;
	} else {
		submitRequest();
		errorHolder.innerHTML = "";
	}
}

const submitRequest = () => {
	const fName = document.getElementById("fname").value;
	const lName = document.getElementById("lname").value;
	const email = document.getElementById("email").value;

	const cFName = fName.charAt(0).toUpperCase() + fName.slice(1);


	const cLName = lName.charAt(0).toUpperCase() + lName.slice(1);

	console.log(`${fName} ${lName} with the ${email} email has signed the form!`);

	const submission = `${cFName} ${cLName} has signed the form!`

	// console.log(submission + " <- Thing to put in <p>");

	// console.log(form.innerText + " <-- The things from the signature form.")

	//grab signature's div
	const signatures = document.getElementById("signatures");

	// create new p tag
	const sigContainer = document.createElement("p");

	// add new p tag to the div and add submission message
	signatures.appendChild(sigContainer);
	sigContainer.innerHTML = submission;

	// create counter
	const sigCounter = document.getElementById("counter");

	let subCount = () => {
		let count = parseInt(sigCounter.innerText);
		count += 1;
		sigCounter.innerText = count;
	}

	subCount();
	showModal(fName);
}

form.addEventListener("submit", validateForm);

let animation = {
	revealDistance: 150,
	initialOpacity: 0,
	transitionDelay: 0,
	transitionDuration: '2s',
	transitionProperty: 'all',
	transitionTimingFunction: 'ease',
}

let revealableContainers = document.querySelectorAll(".revealable");
let motionButton = document.getElementById("motion-button");
let clicked = false;

function reveal() {
	for (let i = 0; i < revealableContainers.length; i++) {
		let windowHeight = window.innerHeight;


		let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

		// console.log(`Containers with the 'revealable' class are: ${revealableContainers[i]}`);
		// reduceMotion(revealableContainers[i]);

		if (topOfRevealableContainer < windowHeight - animation.revealDistance) {

			revealableContainers[i].classList.add("active");

			// console.log(`Active class has been added for ${revealableContainers[i]}!\n `)

		} else {
			revealableContainers[i].classList.remove("active");

			// console.log(`Active class has been REMOVED for ${revealableContainers[i]}!\n `)

		}
	}
}

window.addEventListener('scroll', reveal);

//Modal thing - Popup baby B)

let start = 1;
let startY = 0
let switchh = true;

function decoFun() {
	if (start <= 20 && switchh === true) {
		start++;
		startY--;
	} else if (start === 21) {
		switchh = false;
		start--;
		startY--
	}
	
	if (start >= -20 && switchh === false) {
		start--;
		startY++;
	} else if (start === -21 && switchh === false) {
		switchh = true;
		start++;
		startY--;
	}
	deco.style.transform = `rotate(${start}deg)`;
}

let modal = document.getElementById("modal");
let modalContainer = document.getElementById("modalContainer");
let modalName = document.getElementById("modalName");
let closeBtn = document.getElementById("close");
let deco = document.getElementById("modalDecoImg");

function showModal(firstName) {
	modalName.innerText = firstName;
	modal.style.display = "block";

	setInterval(decoFun, 10);
	
	setTimeout(() => {
		modal.style.display = "none";
	}, 8000);
}


closeBtn.onclick = function() {
	modal.style.display = "none";
}

modal.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// // WILL ADD/FIX LATER
// function reduceMotion(revealableContainer) {
// 	clicked = !clicked;

// 	console.log("the revealible container is " + revealableContainer.innerHTML + "\n");

// 	if (clicked === true) {
// 		revealableContainer.classList.add("no-motion");

// 		// animation.transitionDuration = 'none';
// 		// revealableContainer.classList.style.transition = animation.transitionDuration;
// 		// console.log(animation.transitionDuration);

// 		// animation.initialOpacity = 1;
// 		// revealableContainer.style.opacity = animation.initialOpacity;
// 		// console.log(animation.initialOpacity);
// 	} else {
// 		console.log("scrollin' as usual~\n ");
// 		revealableContainer.classList.add("no-motion");
// 	}

// 	console.log("motion reduced, hopefully...." + "\nClicked is " + clicked);
// }

// motionButton.addEventListener('click', reduceMotion);

// JQuery Ex :D
// $(document).ready(function(){
// 	$("#hide").click(function(){
// 		$("p").hide();
// 	});
// 	$("#show").click(function(){
// 		$("p").show();
// 	});
// });