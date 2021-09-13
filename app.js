// Import dataset
const data = require("./src/store/data.js");
const { messages } = require("./src/utils");
const { countData, filterData } = require("./src/features");

//Get arguments
let args = process.argv[2];

// Define arguments handler
const handler = (args) => {
  if (args && args.includes("--filter")) {
    const params = args.split("=")[1];
    return params ? filterData(params, data) : console.log(messages[1000]);
  }

  if (args && args.includes("--count")) return countData(data);

  return console.log(messages[2000]);
};

//Call handler

handler(args);
