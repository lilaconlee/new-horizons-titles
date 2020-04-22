const _ = require("lodash");

import "./main.scss";

const { starts, ends } = require("./data.json");

const colorClassNames = ["blue", "pink", "green", "purple"];

const getTitle = () => _.sample(starts) + " " + _.sample(ends);

const textEl = document.querySelector(".text");
textEl.textContent = getTitle();
document.querySelector(".container").classList.add(_.sample(colorClassNames));
