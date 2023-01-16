const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", handleFontSizeControlElInput);

function handleFontSizeControlElInput(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(event.currentTarget.value);
};