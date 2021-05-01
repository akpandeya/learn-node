const fs = require("fs");

// const data = fs.readFileSync("input.txt");

// console.log(data.toString());

fs.readFile("input.txt", function (err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log("Program end");