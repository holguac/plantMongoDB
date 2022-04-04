const Plant = require("../methods/plants");

const findPlant = async (argv) => {
  try {
    if (argv.findOne) {
      const foundOne = await Plant.findOne({
        [argv.key]: argv.value,
      });
      console.log(
        `Search for ${argv.key} and ${argv.value}. You're result is ${foundOne.name}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = findPlant;