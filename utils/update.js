const Plant = require("../models/plants");

const updatePlant = async (argv) => {
  try {
    if (argv.updatePlant) {
      const updatePlant = await Plant.findOne({
        //   TODO implement all Keys to work
        name: argv.name,
        // actor,
        // year,
        // genre,
        // rating,
        // director,
      }).updateOne({
        name: argv.updated,
      });
      console.log(updatePlant);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = updatePlant;