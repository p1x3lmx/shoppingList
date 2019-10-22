var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function DoneUndone() {
	let li = document.querySelectorAll("li");
	for (let i = 0; i < li.length; i++) {
		const element = li[i];
		element.addEventListener('click', function () {
			if (element.className != "done") element.classList.add("done");
			else element.classList.toggle("done");
		})
	}
}

function Erasetask(){
	let myList = document.getElementsByTagName("ul");
	let button = document.querySelectorAll("button.erase");
	let length = document.getElementsByClassName("erase");
	for (let i = 0; i < length; i++) {
		//const button = eraseButton[i];
		button.addEventListener('click', function () {
			myList.removeChild(myList.children[i]);
		})
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	DoneUndone();
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	DoneUndone();
	CreateEraseButton();
	Erasetask();
}

function CreateEraseButton(){
	let button = document.createElement("button");
	button.appendChild(document.createTextNode("Remove"));
	button.classList.add("erase");
	ul.appendChild(button);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

DoneUndone();
Erasetask();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
