'use strict';
// console.log('Javascript is working!')

// Data
const hours = [
	'6am',
	'7am',
	'8am',
	'9am',
	'10am',
	'11am',
	'12pm',
	'1pm',
	'2pm',
	'3pm',
	'4pm',
	'5pm',
	'6pm',
	'7pm',
];

// Random function
function randomNum(min, max) {
	return Math.ceil(Math.random() * (max - min + 1) + min);
}

// Locations Data
const seattle = {
	location: 'Seattle',
	minCustomer: 23,
	maxCustomer: 65,
	avgCookieSale: 6.3,
	customersEachHour: [],
	cookiesEachHour: [],
	totalDailyCookies: 0,
	calcCustomersEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let costumer = randomNum(this.minCustomer, this.maxCustomer);
			this.customersEachHour.push(costumer);
			// console.log(this.customersEachHour);
		}
	},
	calcCookiesEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.cookiesEachHour.push(oneHour);
			// this.totalDailyCookies = this.totalDailyCookies + oneHour;
			this.totalDailyCookies += oneHour;
		}
	},
};
const tokyo = {
	location: 'Tokyo',
	minCustomer: 3,
	maxCustomer: 24,
	avgCookieSale: 1.2,
	customersEachHour: [],
	cookiesEachHour: [],
	totalDailyCookies: 0,
	calcCustomersEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let num = randomNum(this.minCustomer, this.maxCustomer);
			this.customersEachHour.push(num);
		}
	},
	calcCookiesEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.cookiesEachHour.push(oneHour);
			this.totalDailyCookies += oneHour;
		}
	},
};
const dubai = {
	location: 'Dubai',
	minCustomer: 11,
	maxCustomer: 38,
	avgCookieSale: 3.7,
	customersEachHour: [],
	cookiesEachHour: [],
	totalDailyCookies: 0,
	calcCustomersEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let num = randomNum(this.minCustomer, this.maxCustomer);
			this.customersEachHour.push(num);
		}
	},
	calcCookiesEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.cookiesEachHour.push(oneHour);
			this.totalDailyCookies += oneHour;
		}
	},
};
const paris = {
	location: 'Paris',
	minCustomer: 20,
	maxCustomer: 38,
	avgCookieSale: 4.6,
	customersEachHour: [],
	cookiesEachHour: [],
	totalDailyCookies: 0,
	calcCustomersEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let num = randomNum(this.minCustomer, this.maxCustomer);
			this.customersEachHour.push(num);
		}
	},
	calcCookiesEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.cookiesEachHour.push(oneHour);
			this.totalDailyCookies += oneHour;
		}
	},
};
const lima = {
	location: 'Lima',
	minCustomer: 2,
	maxCustomer: 16,
	avgCookieSale: 4.6,
	customersEachHour: [],
	cookiesEachHour: [],
	totalDailyCookies: 0,
	calcCustomersEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let num = randomNum(this.minCustomer, this.maxCustomer);
			this.customersEachHour.push(num);
		}
	},
	calcCookiesEachHour: function () {
		for (let i = 0; i < hours.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.cookiesEachHour.push(oneHour);
			this.totalDailyCookies += oneHour;
		}
	},
};

const locations = [seattle, tokyo, dubai, paris, lima];

// TABLE 1
const tableTitles = [
	'Location',
	'Min / Cust',
	'Max / Cust',
	'Avg Cookie / Sale',
];

const tableHeadTitle = document.getElementById('table-head');

function tableHead() {
	for (let i = 0; i < tableTitles.length; i++) {
		const title = document.createElement('th');
		title.textContent = tableTitles[i];
		tableHeadTitle.appendChild(title);
	}
}

const table = document.getElementById('table-body');

function tableRows(loc) {
	// Rows
	const row = document.createElement('tr');
	table.appendChild(row);
	// Column1
	const child1 = document.createElement('td');
	child1.textContent = loc.location;
	row.appendChild(child1);

	// Column2
	const child2 = document.createElement('td');
	child2.textContent = loc.minCustomer;
	row.appendChild(child2);

	// Column3
	const child3 = document.createElement('td');
	child3.textContent = loc.maxCustomer;
	row.appendChild(child3);

	// Column4
	const child4 = document.createElement('td');
	child4.textContent = loc.avgCookieSale;
	row.appendChild(child4);
}

// TABLE 2
const tableHeadTitle2 = document.getElementById('hours-table-head');
const emptyCell = document.createElement('th');

function tableHead2() {
	tableHeadTitle2.appendChild(emptyCell); // Empty cell
	for (let i = 0; i < locations.length; i++) {
		const titleName = document.createElement('th');
		titleName.textContent = locations[i].location;
		tableHeadTitle2.appendChild(titleName);
	}
}
const tableFootTitle2 = document.getElementById('hours-table-foot');
const totalCell = document.createElement('td');
totalCell.textContent = 'Cookies:';

function tableFoot2() {
	tableFootTitle2.appendChild(totalCell); // Total cell
	for (let i = 0; i < locations.length; i++) {
		const titleName = document.createElement('th');
		titleName.textContent = locations[i].totalDailyCookies;
		tableFootTitle2.appendChild(titleName);
	}
}

const tableBodyItems2 = document.getElementById('hours-table-body');

function tableBody2() {
	for (let i = 0; i < hours.length; i++) {
		const row = document.createElement('tr');
		// console.log(hours[i]);
		const hourCell = document.createElement('td');
		hourCell.textContent = hours[i];
		row.appendChild(hourCell);

		// Create cells with maxCustomer data for each location
		for (let j = 0; j < locations.length; j++) {
			const cookiesEachHourCell = document.createElement('td');
			// console.log(i, j);
			cookiesEachHourCell.textContent = locations[j].cookiesEachHour[i];
			row.appendChild(cookiesEachHourCell);
		}

		tableBodyItems2.appendChild(row);
	}
}

// RENDER
function render() {
	// TABLE 1
	tableHead();

	for (let i = 0; i < locations.length; i++) {
		tableRows(locations[i]);
		locations[i].calcCustomersEachHour();
		locations[i].calcCookiesEachHour();
	}

	// TABLE 2
	tableHead2();
	tableFoot2();
	tableBody2();
}

render();
