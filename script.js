var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function DoneUndone() {
	let li = document.querySelectorAll("li");
	for (let i = 0; i < li.length; i++) {
		let element = li[i];
		element.addEventListener('click', function () {
			if (element.classList != "done") element.classList.toggle("done");
			else element.classList.toggle("done")
		})
	}
}

function Erasetask() {
	let button = document.querySelectorAll("button.erase");
	for (let i = 0; i < button.length; i++) {
		let element = button[i];
		element.addEventListener('click', function () {
			element.parentElement.remove();
		})
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	let button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	button.appendChild(document.createTextNode("Remove"));
	button.classList.add("erase");
	ul.appendChild(li);
	li.appendChild(button);
	input.value = "";

}

// function CreateEraseButton() {
// 	let button = document.createElement("button");
// 	button.appendChild(document.createTextNode("Remove"));
// 	button.classList.add("erase");
// 	ul.appendChild(button);
// }

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		DoneUndone();
		Erasetask();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		DoneUndone();
		Erasetask();
	}
}


DoneUndone();
Erasetask();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
