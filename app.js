// Import dataset
const data = require("./src/store/data.js"); // Data in .json
const { messages } = require("./src/utils"); // Error messages
const { countData, filterData } = require("./src/features"); // Features fn()

// define json Logger
const logger = (value) => {
  console.log(JSON.stringify(value, undefined, 2));
};

//Get arguments
let args = process.argv[2];

// Define arguments handler
const handler = (args) => {
  // --filter arg
  if (args && args.includes("--filter")) {
    const params = args.split("=")[1];
    return params ? logger(filterData(params, data)) : console.log(messages[1000]);
  }
  // --count arg
  if (args && args.includes("--count")) return logger(countData(data));
  // default error arg
  return console.log(messages[2000]);
};

//Initiate handler
handler(args);
