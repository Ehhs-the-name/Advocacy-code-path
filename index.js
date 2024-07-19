// Header nonsense
window.onscroll = function() { myFunction() };

var header = document.getElementById("nav-container");
// var banner = document.getElementById("banner");
var bannerHeight = document.getElementById('banner').offsetHeight;
const mainContentContainer = document.getElementById("main-content");
var sticky = header.offsetTop;


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
let dropdown = document.getElementById("nav-dropdown-list");
// let statDrop = document.getElementById("stats-breakdown");

// right now it only shows the extra
let showRest = () => {
	let breakDown = document.getElementsByClassName("breakdown");
	breakDown.toggle("show-rest");
}

dropdown.addEventListener("click", showRest);

//GPT code for button, will work off of it

// function toggleDropdown(button) {
// 	var dropdownMenu = button.nextElementSibling;
// 	dropdownMenu.classList.toggle('show');
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
// 	if (!event.target.matches('.dropdown button')) {
// 			var dropdowns = document.getElementsByClassName("dropdown-menu");
// 			for (var i = 0; i < dropdowns.length; i++) {
// 					var openDropdown = dropdowns[i];
// 					if (openDropdown.classList.contains('show')) {
// 							openDropdown.classList.remove('show');
// 					}
// 			}
// 	}
// }



// Dark Mode code
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
	document.body.classList.toggle("dark-mode");
	
	// not working yet 
	let topBanner = getElementByClassName("top-banner");
	let navContainer = getElementById("nav-container");
	
	
	// let partsBGs = [topBanner, item2, ...];
	document.getElementById("disclamer");
	partsBGs.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);




// Form Code 
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
