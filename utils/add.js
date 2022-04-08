const Plant = require("../models/plants");

const addPlant = async ({ name, fact, botanicalName, light, careLevel }) => {
  try {
    const plant = new Plant({
        name, 
        fact, 
        botanicalName, 
        light, 
        careLevel
    });
    await plant.save();
    console.log(plant, `you have added ${name}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = addPlant;