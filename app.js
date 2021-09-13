// Import dataset
const data = require("./src/store/data.js");

console.log(`data`, data);

//FEATURE Filter option
const filterData = (args, data) => {
  console.log(`FEATURE`, "This is filter feature");
};

//FEATURE Count
const countData = (data) => {
  console.log(`FEATURE`, "This is count feature");
};

//Get arguments
let args = process.argv[2];

//Handle arguments
if (args && args.includes("--filter")) {
  filterData();
} else if (args && args.includes("--count")) {
  countData();
} else {
  console.log("Incorrect parsed arguments");
}
