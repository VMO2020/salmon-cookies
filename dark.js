'use strict';
// console.log('Dark javascript is working!');

let flag = true;

// Selectors
const darkButton = document.querySelector('#dark');
const mainContainer = document.querySelector('.main-container');
const logo = document.querySelector('.logo img');
const header = document.querySelector('.header-container');
const footer = document.querySelector('.footer-container');
const colorSelector = document.querySelector('#colors');

// Content
darkButton.textContent = '🌙';

// Listener
darkButton.addEventListener('click', darkMode);
colorSelector.addEventListener('change', changeColor);

// Function
function darkMode() {
	// console.log('Click');
	if (flag === true) {
		darkButton.textContent = '☀️';
		mainContainer.style.backgroundColor = 'black';
		logo.style.backgroundColor = 'transparent';
		mainContainer.style.color = 'white';
	} else {
		darkButton.textContent = '🌙';
		mainContainer.style.backgroundColor = 'white';
		logo.style.backgroundColor = 'white';
		mainContainer.style.color = 'black';
	}
	flag = !flag;
}

function changeColor() {
	const color = document.querySelector('#colors').value;
	// console.log(color);
	header.style.backgroundColor = color;
	footer.style.backgroundColor = color;
}
