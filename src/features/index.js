//-- filter
const filterData = (keyword, data) => {
  const { data: rawData } = data; //Destruct raw data

  return rawData.reduce((prevAnimal, currentAnimal) => {
    //   filter animals from  owners
    const animalOwners = currentAnimal.people.reduce((prevPeople, currentPeople) => {
      const filteredAnimals = currentPeople.animals.filter((animal) =>
        animal.name.includes(keyword)
      );
      if (filteredAnimals.length) {
        prevPeople.push(
          Object.assign({}, currentPeople, {
            animals: filteredAnimals,
          })
        );
      }
      return prevPeople;
    }, []);
    if (animalOwners.length) {
      prevAnimal.push(
        Object.assign({}, currentAnimal, {
          people: animalOwners,
        })
      );
    }
    return prevAnimal;
  }, []);
};

//-- count
const countData = (data) => {
  const { data: rawData } = data; //Destruct raw data
  // Map and return count included object
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
