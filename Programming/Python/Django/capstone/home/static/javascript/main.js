"use strict";

// All vehicle types region
var vehicles = [
	[
		"BMW",
		"F06 6 Series",
		"F15 X5",
		"F20 1 Series",
		"F25 X3",
		"F26 X4",
		"F32 4 Series",
		"F45 2 Series",
		"F48 X1",
		"G01 X3",
		"G11 7 Series",
		"G15 8 Series",
		"G20 3 Series",
		"G29 Z4",
		"I01 i3",
		"I12 i8"
	],
	[
		"Buick",
		"Cascada",
		"Enclave",
		"Encore",
		"Envision",
		"GL8",
		"LaCrosse",
		"Regal",
		"Regal Sportback",
		"Verano"
	],
	[
		"Chevy",
		"Camaro",
		"Colorado",
		"Corvette",
		"Cruze",
		"Equinox",
		"Impala",
		"Malibu",
		"Silverado",
		"Suburban",
		"Tahoe"
	],
	[
		"Chrysler",
		"200",
        "300",
        "Pacifica",
        "300C",
        "PT Cruiser",
        "Crossfire",
        "Town and Country",
        "200C EV",
        "Pacifica",
        "Nassau"
	],
	[
		"Dodge",
		"Caravan",
		"Challenger",
		"Charger",
		"Dakota",
		"Dart",
		"Durango",
		"EV",
		"Journey",
		"Ram",
		"SRT Viper"
	],
	[
		"Ford",
		"Edge",
		"Expedition",
		"Explorer",
		"F-150",
		"Flex",
		"Focus",
		"Fusion",
		"GT",
		"Mustang",
		"Ranger",
		"Super Duty"
	],
	[
		"Honda",
		"Accord",
		"CR-V",
		"Civic",
		"Fit",
		"Odyssey",
		"Pilot",
		"Shuttle",
		"UR-V",
		"Vamos"
	],
	[
		"Hyundai",
		"Accent",
		"Elantra",
		"Grandeur",
		"Ioniq",
		"Nexo",
		"Santa Fe",
		"Sonata",
		"Tucson",
		"Veloster"
	],
	[
		"Jeep",
		"Cherokee",
		"Compass",
		"Grand Cherokee",
		"New Compass",
		"Patriot",
		"Renegade",
		"Wrangler",
		"Wrangler JK"
	],
	[
		"Kia",
		"Cee'd",
		"Forte",
		"K4",
		"K9",
		"Optima",
		"Ray",
		"Sorento",
		"Soul",
		"Sportage"
	],
	[
		"Mazda",
		"5",
		"6",
		"BT-50",
		"CX-9",
		"Kabura",
		"MPV",
		"MX-5",
		"Millenia",
		"RX-7",
		"RX-8",
		"Speed3",
		"Tribute"
	],
	[
		"Mercedes",
		"AMG GT",
		"All Class Cabriolet",
		"All Class Coupes",
		"All Class Sedans",
		"G-Class SUV",
		"GLA/C/E/S SUV",
		"GLC/E SUV",
		"Maybach",
		"SL and SLC Roadster"
	],
	[
		"Nissan",
		"Altima",
		"Atlas",
		"Cube",
		"GT-R",
		"Juke",
		"Maxima",
		"Murano",
		"Pathfinder",
		"Rogue",
		"Sentra",
		"Titan",
		"Versa",
		"X-Trail"
	],
	[
		"Subaru",
		"Accent",
		"BRZ",
		"Crosstrek",
		"Forester",
		"Impreza",
		"Legacy",
		"Outback",
		"WRX"
	],
	[
		"Toyota",
		"Camry",
		"Century",
		"Corolla",
		"Crown",
		"Estima",
		"Fielder",
		"Land Cruiser",
		"Prius",
		"Sienta",
		"Vellfire",
		"Yaris"
	],
	[
		"Volkswagen",
		"Atlas",
		"Beetle",
		"Caddy",
		"Jetta",
		"Passat",
		"Polo",
		"Santana",
		"Sharan",
		"Touran",
		"Up",
		"Vento"
	]
];
// endregion
init();

// Turns on/off the make container dropdown options if clicked
function ToggleMakeContainer() {
	document.getElementById("makeContainer").classList.toggle("show");
}

function ConfirmShipping(e) {
	// If any information is wrong ; e.preventDefault(); else, do nothing
}
function ShowShippingModal(vehicleName) {
	// Set something in shipping modal to vehicle name
}
async function ModelClicked(e) {
	ShowShippingModal(e.target.textContent);
}

// Called from {~~refline1}
// Opens sublist from car types list
function SetupModel(e) {
	// Sets the make type to whatever button called its text content
	var makeType = e.target.textContent;
	// Sets the makeDropdown value to the makeType to update its inner text
	document.getElementById("makeDropdown").value = makeType;
	// Toggles the make container box to close it after you've clicked an option
	ToggleMakeContainer();

	// Foreachs the vehicles types by incrementing the vehicle type by 1 each iteration
	for (var vehicleIndex = 0; true; vehicleIndex++) {
		// Checks the vehicles type and if it is the make type then it breaks as the vehicleIndex is on the correct position
		if (vehicles[vehicleIndex][0] === makeType) {
			break;
		}
	}

	// Shifts out the zeroth index of the correct array, removing the base car-type
	vehicles[vehicleIndex].shift();
	// Foreachs all vehicles of the vehicle type selected
	for (var vehicle of vehicles[vehicleIndex]) {
		// And adds them into a clickable list
		var linkContainer = document.createElement("a");
		linkContainer.textContent = vehicle;
		// Adds an event listener to send the model type as a post request
		linkContainer.addEventListener("click", ModelClicked);
		document.getElementById("modelContainer").appendChild(linkContainer);
	}
	// Unshifts the value of the base car-type back into the  array.
	vehicles[vehicleIndex].unshift(makeType);
	// Shows the model box as there is now content within
	document.getElementById("model").classList.add("show");
}


function init() {
	// Initializes all vehicle types in make container ie. (Dodge, Chevy, Nissan)
	// Car Make region
	// Gets all vehicles from 2D vehicles array
	for (var vehicleType of vehicles) {
		// Setup link container to contain vehicle type
		var linkContainer = document.createElement("a");
		// Each vehicle array of vehicles first entry is the car type
		// ie. (Dodge, Chevy, Nissan)
		linkContainer.textContent = vehicleType[0];
		// Adds a click listener to open up prompt if they're clicked on
		// Said event triggers a new sub-list of the car types individual cars
		// ~~refline1
		linkContainer.addEventListener("click", SetupModel);
		// Adds all linked car types to their list object
		document.getElementById("makeContainer").appendChild(linkContainer);
	}
	// endregion
	// Adds a click event listener for toggling the make container dropdown
	document.getElementById("makeDropdown").addEventListener("click", ToggleMakeContainer);

}

function ads() {
	// Creates an empty array
	var allAds = [];
	// Loops through all 16 photos in file
	for (var i = 1; i <= 16; i ++) {
		// Shows the current photo
		allAds.push(`nb_${i}.jpg`);
	}
    for (var node of document.getElementsByClassName("ad")) {
        var rand = Math.floor(Math.random() * allAds.length);
        node.src = allAds[rand];
        allAds.splice(rand, 1);
    });
}

ads();
