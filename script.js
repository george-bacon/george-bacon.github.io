const addText = () => {
  let container = document.getElementById("coding-container");
  let codeText = document.getElementById("coding");

  // container.style.position = "relative";

  let appendText = document.createElement("span");
  appendText.className = "append-text";
  appendText.textContent = " />";
  appendText.style.color = "#b1740f";

  let prependText = document.createElement("span");
  prependText.className = "prepend-text";
  prependText.textContent = "< ";
  prependText.style.color = "#b1740f";

  codeText.appendChild(appendText);
  codeText.insertBefore(prependText, codeText.firstChild);
};

const removeText = () => {
  let container = document.getElementById("coding-container");
  let codeText = document.getElementById("coding");
  let appendText = document.querySelector(".append-text");
  let prependText = document.querySelector(".prepend-text");

  if (appendText) {
    codeText.removeChild(appendText);
  }

  if (prependText) {
    codeText.removeChild(prependText); // Remove prepended text
  }

  // codeText.removeChild(paragraph.firstChild);
  // codeText.removeChild(paragraph.lastChild);
};
