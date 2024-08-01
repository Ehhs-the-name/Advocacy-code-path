// Header nonsense
window.onscroll = function() { myFunction() };

function alwaysFixedNav() {
	$(header).removeClass("sticky");
}

window.addEventListener('load', alwaysFixedNav);

var header = document.getElementById("nav-container");
var bannerHeight = document.getElementById('banner').offsetHeight;
const mainContentContainer = document.getElementById("main-content");
var sticky = header.offsetTop;

function myFunction() {
	if (window.scrollY > sticky + bannerHeight) {
		$(header).addClass("sticky");
		banner.style.visiblity = "hidden";
		$(mainContentContainer).addClass("smooth-nav-transition");
	}
	else {
		$(header).removeClass("sticky");
		$(mainContentContainer).removeClass("smooth-nav-transition");
	}
}

// button "show more" code
// It works now :)
let dropdown = document.getElementById("stats-drop-button");

let showRest = () => {
	let breakDown = document.getElementById("stats-breakdown");
	$(breakDown).toggleClass("show-rest");
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

	// let navContainerLinks = navContainer.querySelectorAll("a");
	
	buttons.forEach(button => {
		button.classList.toggle("button-dark");
	});
	
	$("#modalContainer").toggleClass("dark-mode");
	
	$("#foot").toggleClass("dark-mode-extra");
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

	const signatures = document.getElementById("signatures");

	const sigContainer = document.createElement("p");

	signatures.appendChild(sigContainer);
	sigContainer.innerHTML = submission;

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

		if (topOfRevealableContainer < windowHeight - animation.revealDistance) {

			revealableContainers[i].classList.add("active");
		} else {
			revealableContainers[i].classList.remove("active");
		}
	}
}

window.addEventListener('scroll', reveal);

//Modal thing - Popup baby B)
let start = 1;
let startY = 0
let switchh = true;

function decoFun() {
	deco.classList.add("animated-element");

	// original rotate code:
	// if (start <= 20 && switchh === true) {
	// 	start++;
	// 	startY--;
	// } else if (start === 21) {
	// 	switchh = false;
	// 	start--;
	// 	startY--
	// }

	// if (start >= -20 && switchh === false) {
	// 	start--;
	// 	startY++;
	// } else if (start === -21 && switchh === false) {
	// 	switchh = true;
	// 	start++;
	// 	startY--;
	// }
	// deco.style.transform = `rotate(${start}deg)`;
}

let modal = document.getElementById("modal");
let modalContainer = document.getElementById("modalContainer");
let modalName = document.getElementById("modalName");
let closeBtn = document.getElementById("close");
let deco = document.getElementById("modalDecoImg");

function showModal(firstName) {
	modalName.innerText = firstName;
	$(".modal").show();

	interval = setInterval(decoFun, 100);

	setTimeout(() => {
		$(".modal").hide();
		clearInterval(interval);
	}, 8000);
}


closeBtn.onclick = function() {
	$(".modal").hide();
	clearInterval(interval);
}

modal.onclick = function(event) {
	if (event.target == modal) {
		$(".modal").hide();
		clearInterval(interval);
	}
}


function reduceMotion() {
	clicked = !clicked;

	for (let i = 0; i < revealableContainers.length; i++) {
		if (clicked === true) {
			$(revealableContainers[i]).addClass("no-motion");
			motionButton.innerText = "Add Motion";
		} else {
			clicked = false;
			$(revealableContainers[i]).removeClass("no-motion");
			motionButton.innerText = "Reduce Motion";
		}
	}
}

motionButton.addEventListener('click', reduceMotion);
