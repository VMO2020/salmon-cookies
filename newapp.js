'use strict';
// console.log('Javascript is working!')

// ************************ Data ************************
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

// *************************** Random function ***************************
function randomNum(min, max) {
	return Math.ceil(Math.random() * (max - min + 1) + min);
}

// ************************  Constructor function ************************
function LocationData(
	location,
	minCustomer,
	maxCustomer,
	avgCookieSale,
	imageFileName
) {
	this.location = location;
	this.minCustomer = minCustomer;
	this.maxCustomer = maxCustomer;
	this.avgCookieSale = avgCookieSale;
	this.customersEachHour = [];
	this.cookiesEachHour = [];
	this.totalDailyCookies = 0;
	this.reqCookieTossers = [];
	this.minCookieTossers = 2;
	this.calcCustomersEachHour = function () {
		for (let i = 0; i < hours.length; i++) {
			let costumer = randomNum(this.minCustomer, this.maxCustomer);
			this.customersEachHour.push(costumer);
			// console.log(this.customersEachHour);
		}
		this.calcCookiesEachHour = function () {
			for (let i = 0; i < hours.length; i++) {
				let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
				this.cookiesEachHour.push(oneHour);
				// this.totalDailyCookies = this.totalDailyCookies + oneHour;
				this.totalDailyCookies += oneHour;
			}
		};
		this.calcCookieTossers = function () {
			for (let i = 0; i < hours.length; i++) {
				let reqCookieT = Math.ceil(this.customersEachHour[i] / 20);
				if (reqCookieT <= 2) {
					reqCookieT = 2;
				}
				this.reqCookieTossers.push(reqCookieT);
				if (reqCookieT > this.minCookieTossers) {
					this.minCookieTossers = reqCookieT;
				}
			}
		};
	};
	this.calcCustomersEachHour();
	this.calcCookiesEachHour();
	this.calcCookieTossers();
	// console.log(this.customersEachHour);
	// console.log(this.reqCookieTossers);
}

const seattle = new LocationData('Seattle', 23, 65, 6.3);
const tokyo = new LocationData('Tokyo', 3, 24, 1.2);
const dubai = new LocationData('Dubai', 11, 38, 3.7);
const paris = new LocationData('Paris', 20, 38, 4.6);
const lima = new LocationData('Lima', 2, 16, 4.6);

const locations = [seattle, tokyo, dubai, paris, lima];

// ******************************  TABLE 1 ******************************
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

function tableRows() {
	for (let i = 0; i < locations.length; i++) {
		const loc = locations[i];

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
}

// ****************************** TABLE 2 *******************************
// Head
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

// Body
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
			// console.log(locations[j].cookiesEachHour[i]);
			cookiesEachHourCell.textContent = locations[j].cookiesEachHour[i];
			row.appendChild(cookiesEachHourCell);
		}

		tableBodyItems2.appendChild(row);
	}
}

// Foot
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

// ****************************** TABLE 3 ******************************
// Head
const tableHeadTitle3 = document.getElementById('tossers-table-head');
const emptyCell2 = document.createElement('th');

function tableHead3() {
	tableHeadTitle3.appendChild(emptyCell2); // Empty cell
	for (let i = 0; i < locations.length; i++) {
		const titleName = document.createElement('th');
		titleName.textContent = locations[i].location;
		tableHeadTitle3.appendChild(titleName);
	}
}

// Body
const tableBodyItems3 = document.getElementById('tossers-table-body');

function tableBody3() {
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
			// console.log(locations[j].cookiesEachHour[i]);
			cookiesEachHourCell.textContent = locations[j].reqCookieTossers[i];
			row.appendChild(cookiesEachHourCell);
		}

		tableBodyItems3.appendChild(row);
	}
}

// Foot
const tableFootTitle3 = document.getElementById('tossers-table-foot');
const totalCell3 = document.createElement('td');
totalCell3.textContent = 'Tossers:';

function tableFoot3() {
	tableFootTitle3.appendChild(totalCell3); // Total cell
	for (let i = 0; i < locations.length; i++) {
		const titleName = document.createElement('th');
		titleName.textContent = locations[i].minCookieTossers;
		tableFootTitle3.appendChild(titleName);
	}
}

// ****************************** RENDER *******************************
function render() {
	// TABLE 1
	tableHead();
	tableRows();

	// TABLE 2
	tableHead2();
	tableBody2();
	tableFoot2();

	// TABLE3
	tableHead3();
	tableBody3();
	tableFoot3();
}

render();
