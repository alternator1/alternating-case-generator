function conv() {
  let setting = document.getElementById("operation");
  if (setting.value == "Randomize") {
    randomize();
  } else {
    alternate();
  }

  return false;
}

function alternate() {
  let inputText = document.getElementById("input").value;
  let outputText = "";

  for (let i = 0; i < inputText.length; i++) {
    if (i % 2 == 0) {
      outputText += inputText[i].toLowerCase();
    } else {
      outputText += inputText[i].toUpperCase();
    }
  }

  document.getElementById("convertedText").value = outputText;
}

function randomize() {
  let inputText = document.getElementById("input").value;
  let outputText = "";
  let inputIndex = 0;
  let group = 1;

  while(inputIndex < inputText.length) {
    let i = 0;
    let randNum = 1 + Math.floor(4 * Math.random());

    while(inputIndex < inputText.length && i < randNum) {
      if (group % 2 == 0) {
        outputText += inputText[inputIndex].toUpperCase();
      } else {
        outputText += inputText[inputIndex].toLowerCase();
      }
      inputIndex++;
      i++;
    }

    group++;
  }

  document.getElementById("convertedText").value = outputText;
}

function copy() {
  let copyText = document.getElementById("convertedText");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  return false;
}
