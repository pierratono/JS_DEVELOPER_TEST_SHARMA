// Import dataset
// import { data } from "data.js";

// console.log(`data`, data);

//FEATURE Filter option
const filterData = (args, data) => {
  console.log(`FEATURE`, "This is filter feature");
};

//FEATURE Count
const countData = (data) => {
  console.log(`FEATURE`, "This is count feature");
};

//Todo: Handle Args
const args = process.argv;
const params = args[2];

switch (params) {
  case "--filter=ry":
    filterData();
    break;
  case "--count":
    countData();
    break;
  default:
    break;
}
