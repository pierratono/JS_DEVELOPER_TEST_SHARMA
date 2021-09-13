//FEATURE Filter option
const filterData = (params, data) => {
  console.log(`FEATURE`, "This is filter feature");
  console.log(`data`, data);
  console.log(`params`, params);
};

//Todo: Feat Count
const countData = (data) => {
  const { data: rawData } = data;
  console.log(`FEATURE`, "This is count feature");

  const animalCounts = rawData.map((animalCount) => {
    obj: animalCount;
  });

  return console.log(`data`, animalCounts);
};

module.exports = {
  filterData,
  countData,
};
