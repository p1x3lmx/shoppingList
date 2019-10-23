var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function CheckUncheck () {

	let list = document.querySelectorAll("li");

	list.forEach(listElement => {
		listElement.addEventListener('click', function(){
			 listElement.classList.toggle("done");
		})
	})
}

function UpdateListItems (list){
	CheckUncheck(list);
	Erasetask();
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
	li.classList.add("uncheck");
	input.value = "";
	UpdateListItems();
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

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
UpdateListItems();


