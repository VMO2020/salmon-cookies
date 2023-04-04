// console.log('Javascript is working!');

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

const locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];

// Random function
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
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
			let num = randomNum(this.minCustomer, this.maxCustomer);
			this.customersEachHour.push(num);
		}
	},
	calcCookiesEachHour: function () {
		// random code and totalDaily push
		for (let i = 0; i < this.customersEachHour.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.totalDailyCookies = this.totalDailyCookies + oneHour;
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
		// random code and totalDaily push
		for (let i = 0; i < this.customersEachHour.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.totalDailyCookies = this.totalDailyCookies + oneHour;
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
		// random code and totalDaily push
		for (let i = 0; i < this.customersEachHour.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.totalDailyCookies = this.totalDailyCookies + oneHour;
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
		// random code and totalDaily push
		for (let i = 0; i < this.customersEachHour.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.totalDailyCookies = this.totalDailyCookies + oneHour;
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
		// random code and totalDaily push
		for (let i = 0; i < this.customersEachHour.length; i++) {
			let oneHour = parseInt(this.customersEachHour[i] * this.avgCookieSale);
			this.totalDailyCookies = this.totalDailyCookies + oneHour;
		}
	},
};

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

function tableHead2() {
	for (let i = 0; i < locations.length; i++) {
		const title = document.createElement('th');
		title.textContent = locations[i];
		tableHeadTitle2.appendChild(title);
	}
}

const table2 = document.getElementById('hours-table-body');

function tableBody2(loc) {
	for (let i = 0; i < hours.length; i++) {
		const item = document.createElement('li');
		item.textContent = `${hours[i]}: ${loc.customersEachHour[i]} cookies`;
		table2.appendChild(item);
	}
}

// RENDER
function render() {
	// TABLE 1
	tableHead();
	tableRows(seattle);
	seattle.calcCustomersEachHour();
	seattle.calcCookiesEachHour();
	// console.log(seattle.customersEachHour);
	// console.log(seattle.totalDailyCookies);

	tableRows(tokyo);
	tokyo.calcCustomersEachHour();
	tokyo.calcCookiesEachHour();

	tableRows(dubai);
	dubai.calcCustomersEachHour();
	dubai.calcCookiesEachHour();

	tableRows(paris);
	paris.calcCustomersEachHour();
	paris.calcCookiesEachHour();

	tableRows(lima);
	lima.calcCustomersEachHour();
	lima.calcCookiesEachHour();

	// TABLE 2
	tableHead2();
	tableBody2(seattle);
	tableBody2(tokyo);
}

render();
