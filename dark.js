'use strict';
// console.log('Dark javascript is working!');

let flag = true;

// Selectors
const darkButton = document.querySelector('#dark');
const mainContainer = document.querySelector('.main-container');
const logo = document.querySelector('.logo img');

// Content
darkButton.textContent = '🌙';

// Listener
darkButton.addEventListener('click', darkMode);

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
