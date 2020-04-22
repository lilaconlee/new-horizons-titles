const fs = require("fs");

const fullDataFile = "full-data.txt";
const parsedDataFile = "data.json";

const lines = fs.readFileSync(fullDataFile).toString().split("\n");
const starts = [];
const ends = [];

lines.forEach((line) => {
  const splitLine = line.split("\t");
  const num = splitLine.shift();
  const start = splitLine.shift();
  if (num.length !== 5) {
    starts.push(start);
    splitLine.forEach((item) => {
      if (item !== "") {
        ends.push(item);
      }
    });
  }
});

const json = JSON.stringify({ starts, ends });
fs.writeFile(parsedDataFile, json, "utf-8", (err) => {
  console.log(err);
});
