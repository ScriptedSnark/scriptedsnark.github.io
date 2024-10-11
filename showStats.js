// define functions
function sortObject(obj) {
	return Object.keys(obj)
    .sort((key1, key2) => obj[key1] - obj[key2])
    .reduce((object, key) => ({
      ...object,
      [key]: obj[key]
    }), {})
}
function reverseObject(object) {
	var newObject = {};
	var keys = [];
	for (var key in object) {
		keys.push(key);
	}
	for (var i = keys.length - 1; i >= 0; i--) {
		var value = object[keys[i]];
		newObject[keys[i]] = value;
	}
	return newObject;
}
const ids = [
	"n268nk6p", //HL1
	"3dx23z51", //HL1CE
	"ok6q991g", //HL2
	"y65gk8de" //HL2CE
];
document.getElementById("warning").innerHTML = "Select a game to view its leaderboards. Loading might take a couple of seconds..";
window.onload = function() {
	let HL1Board = document.querySelector("#HL1Table");
	HL1Board.onclick = () => {
		
		let xhr = new XMLHttpRequest();
		xhr.open("GET", `https://www.speedrun.com/api/v1/games/${ids[0]}`, false);
		xhr.send();
		
		moderators = [];
		runsVerified = [];
		database = JSON.parse(xhr.responseText);
		for (key in database["data"]["moderators"]) {
			moderators.push(key);
		}
		let xhr2 = new XMLHttpRequest();
		for (var i = moderators.length - 1; i >= 0; i--) {
			xhr2.open("GET", `https://www.speedrun.com/api/v1/runs?game=${ids[0]}&max=200&examiner=${moderators[i]}`, false);
			xhr2.send();
			
			runs = JSON.parse(xhr2.responseText);
			runsVerifiedNumber = runs.pagination.size;
			do {
				if (runs.pagination.size == 200) {
					xhr2.open("GET", `https://www.speedrun.com/api/v1/runs?game=${ids[0]}&max=200&examiner=${moderators[i]}&offset=${runsVerifiedNumber}`, false);
					xhr2.send();
					
					runs = JSON.parse(xhr2.responseText);
					runsVerifiedNumber += runs.pagination.size;
				}
			} while (runs.pagination.size == 200);
			runsVerified.push(runsVerifiedNumber);
		}
		runsVerified = runsVerified.reverse();
		var result = {};
		moderators.forEach((key, i) => result[key] = runsVerified[i]);
		//result = swap(result);
		result = sortObject(result);
		//result = swap(result);
		result = reverseObject(result);
		let xhr3 = new XMLHttpRequest();
		var output = "";
		var place = 0;
		for (key in result) {
			place++
			xhr3.open("GET", "https://www.speedrun.com/api/v1/users/" + key, false);
			xhr3.send();
			
			modNameRaw = JSON.parse(xhr3.responseText)
			modName = modNameRaw["data"]["names"]["international"]
			output += "<tr><td>" + place + "</td><td>" + modName + "</td><td>" + result[key] + "</td><tr>"
		}
		document.getElementById("warning").innerHTML = "";
		document.getElementById("table").innerHTML = output;
		console.log(apicount);
	};
	let HL1CEBoard = document.querySelector("#HL1CETable");
	HL1CEBoard.onclick = () => {
		
		let xhr = new XMLHttpRequest();
		xhr.open("GET", `https://www.speedrun.com/api/v1/games/${ids[1]}`, false);
		xhr.send();
		
		moderators = [];
		runsVerified = [];
		database = JSON.parse(xhr.responseText);
		for (key in database["data"]["moderators"]) {
			moderators.push(key);
		}
		let xhr2 = new XMLHttpRequest();
		for (var i = moderators.length - 1; i >= 0; i--) {
			xhr2.open("GET", `https://www.speedrun.com/api/v1/runs?game=${ids[1]}&max=200&examiner=${moderators[i]}`, false);
			xhr2.send();
			
			runs = JSON.parse(xhr2.responseText);
			runsVerifiedNumber = runs.pagination.size;
			do {
				if (runs.pagination.size == 200) {
					xhr2.open("GET", `https://www.speedrun.com/api/v1/runs?game=${ids[1]}&max=200&examiner=${moderators[i]}&offset=${runsVerifiedNumber}`, false);
					xhr2.send();
					
					runs = JSON.parse(xhr2.responseText);
					runsVerifiedNumber += runs.pagination.size;
				}
			} while (runs.pagination.size == 200);
			runsVerified.push(runsVerifiedNumber);
		}
		runsVerified = runsVerified.reverse();
		var result = {};
		moderators.forEach((key, i) => result[key] = runsVerified[i]);
		//result = swap(result);
		result = sortObject(result);
		//result = swap(result);
		result = reverseObject(result);
		let xhr3 = new XMLHttpRequest();
		var output = "";
		var place = 0;
		for (key in result) {
			place++
			xhr3.open("GET", "https://www.speedrun.com/api/v1/users/" + key, false);
			xhr3.send();
			
			modNameRaw = JSON.parse(xhr3.responseText)
			modName = modNameRaw["data"]["names"]["international"]
			output += "<tr><td>" + place + "</td><td>" + modName + "</td><td>" + result[key] + "</td><tr>"
		}
		document.getElementById("warning").innerHTML = "";
		document.getElementById("table").innerHTML = output;
		console.log(apicount);
	};
	let HL2Board = document.querySelector("#HL2Table");
	HL2Board.onclick = () => {
		
		let xhr = new XMLHttpRequest();
		xhr.open("GET", `https://www.speedrun.com/api/v1/games/${ids[2]}`, false);
		xhr.send();
		
		moderators = [];
		runsVerified = [];
		database = JSON.parse(xhr.responseText);
		for (key in database["data"]["moderators"]) {
			moderators.push(key);
		}
		let xhr2 = new XMLHttpRequest();
		for (var i = moderators.length - 1; i >= 0; i--) {
			xhr2.open("GET", `https://www.speedrun.com/api/v1/runs?game=${ids[2]}&max=200&examiner=${moderators[i]}`, false);
			xhr2.send();
			
			runs = JSON.parse(xhr2.responseText);
			runsVerifiedNumber = runs.pagination.size;
			do {
				if (runs.pagination.size == 200) {
					xhr2.open("GET", `https://www.speedrun.com/api/v1/runs?game=${ids[2]}&max=200&examiner=${moderators[i]}&offset=${runsVerifiedNumber}`, false);
					xhr2.send();
					
					runs = JSON.parse(xhr2.responseText);
					runsVerifiedNumber += runs.pagination.size;
				}
			} while (runs.pagination.size == 200);
			runsVerified.push(runsVerifiedNumber);
		}
		runsVerified = runsVerified.reverse();
		var result = {};
		moderators.forEach((key, i) => result[key] = runsVerified[i]);
		//result = swap(result);
		result = sortObject(result);
		//result = swap(result);
		result = reverseObject(result);
		let xhr3 = new XMLHttpRequest();
		var output = "";
		var place = 0;
		for (key in result) {
			place++
			xhr3.open("GET", "https://www.speedrun.com/api/v1/users/" + key, false);
			xhr3.send();
			
			modNameRaw = JSON.parse(xhr3.responseText)
			modName = modNameRaw["data"]["names"]["international"]
			output += "<tr><td>" + place + "</td><td>" + modName + "</td><td>" + result[key] + "</td><tr>"
		}
		document.getElementById("warning").innerHTML = "";
		document.getElementById("table").innerHTML = output;
		console.log(apicount);
	};
	let HL2CEBoard = document.querySelector("#HL2CETable");
	HL2CEBoard.onclick = () => {
		
		let xhr = new XMLHttpRequest();
		xhr.open("GET", `https://www.speedrun.com/api/v1/games/${ids[3]}`, false);
		xhr.send();
		
		moderators = [];
		runsVerified = [];
		database = JSON.parse(xhr.responseText);
		for (key in database["data"]["moderators"]) {
			moderators.push(key);
		}
		let xhr2 = new XMLHttpRequest();
		for (var i = moderators.length - 1; i >= 0; i--) {
			xhr2.open("GET", `https://www.speedrun.com/api/v1/runs?game=${ids[3]}&max=200&examiner=${moderators[i]}`, false);
			xhr2.send();
			
			runs = JSON.parse(xhr2.responseText);
			runsVerifiedNumber = runs.pagination.size;
			do {
				if (runs.pagination.size == 200) {
					xhr2.open("GET", `https://www.speedrun.com/api/v1/runs?game=${ids[3]}&max=200&examiner=${moderators[i]}&offset=${runsVerifiedNumber}`, false);
					xhr2.send();
					
					runs = JSON.parse(xhr2.responseText);
					runsVerifiedNumber += runs.pagination.size;
				}
			} while (runs.pagination.size == 200);
			runsVerified.push(runsVerifiedNumber);
		}
		runsVerified = runsVerified.reverse();
		var result = {};
		moderators.forEach((key, i) => result[key] = runsVerified[i]);
		//result = swap(result);
		result = sortObject(result);
		//result = swap(result);
		result = reverseObject(result);
		let xhr3 = new XMLHttpRequest();
		var output = "";
		var place = 0;
		for (key in result) {
			place++
			xhr3.open("GET", "https://www.speedrun.com/api/v1/users/" + key, false);
			xhr3.send();
			
			modNameRaw = JSON.parse(xhr3.responseText)
			modName = modNameRaw["data"]["names"]["international"]
			output += "<tr><td>" + place + "</td><td>" + modName + "</td><td>" + result[key] + "</td><tr>"
		}
		document.getElementById("warning").innerHTML = "";
		document.getElementById("table").innerHTML = output;
		console.log(apicount);
	};
};
