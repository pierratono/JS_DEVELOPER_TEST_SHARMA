// Import dataset
const data = require("./src/store/data.js");
const { messages } = require("./src/utils");

console.log(`data`, data);
console.log(`messages`, messages);

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
  const params = args.split("=")[1];
  params ? filterData() : console.log(messages[1000]);
} else if (args && args.includes("--count")) {
  countData();
} else {
  console.log(messages[2000]);
}
