"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const defa = "da";
texts[defa].texts.forEach((textObj) => {
  document.querySelector(textObj.location).textContent = textObj.text;
});

const select = document.querySelector("#language");

select.addEventListener("change", function () {
  const value = select.value;

  texts[value].texts.forEach((textObj) => {
    console.log(textObj);
    document.querySelector(textObj.location).textContent = textObj.text;
  });
});
