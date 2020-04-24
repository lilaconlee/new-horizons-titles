const _ = require("lodash");

import "./main.scss";

// TODO padding at bottom of lists
// TODO alphabetical "It"

let { starts, ends } = require("./data.json");

const getTitle = () => _.sample(starts) + " " + _.sample(ends);

const createListItem = (word) => {};

const populateListEl = (listEl, wordList) => {
  wordList.forEach((word) => {
    let itemEl = document.createElement("li");
    itemEl.innerHTML = word;
    itemEl.classList.add("item");
    listEl.appendChild(itemEl);
  });
};

let numNbsp = 5;
while (numNbsp > 0) {
  starts.push("&nbsp");
  ends.push("&nbsp");
  numNbsp--;
}

// if (ends.length > starts.length) {
// let extras = ends.length - starts.length;
// while (extras > 0) {
// starts.push("&nbsp");
// extras--;
// }
// }

const startsEl = document.getElementById("starts");
const endsEl = document.getElementById("ends");

populateListEl(startsEl, starts);
populateListEl(endsEl, ends);
