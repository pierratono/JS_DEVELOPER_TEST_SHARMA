//FEATURE Filter option
const filterData = (params, data) => {
  console.log(`FEATURE`, "This is filter feature");
  console.log(`data`, data);
  console.log(`params`, params);
};

//FEATURE Count
const countData = (data) => {
  console.log(`FEATURE`, "This is count feature");
  console.log(`data`, data);
};

module.exports = {
  filterData,
  countData,
};
