// document.getElementById("name-input").oninput = function () {
// 	document.getElementById("name-output").textContent = this.value;
// };

// /===================================================================================/

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
	const inputValue = event.currentTarget.value;

	textOutput.textContent = inputValue !== "" ? inputValue : "Anonymous";
});
