'use strict';
// console.log('Dark javascript is working!');

let flag = true;

// Selectors
const darkButton = document.querySelector('#dark');
const mainContainer = document.querySelector('.main-container');

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
		mainContainer.style.color = 'white';
	} else {
		darkButton.textContent = '🌙';
		mainContainer.style.backgroundColor = 'white';
		mainContainer.style.color = 'black';
	}
	flag = !flag;
}
