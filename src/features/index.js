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

  const animalCounts = rawData.map((animalCount) => ({
    name: `${animalCount.name} [${animalCount.people.length}]`,
    people: animalCount.people.map((person) => ({
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals,
    })),
  }));

  return JSON.stringify(animalCounts, undefined, 2);
};

module.exports = {
  filterData,
  countData,
};
