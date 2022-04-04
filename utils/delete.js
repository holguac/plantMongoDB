const Plant = require("../attributes/plants");

const deletePlant = async (argv) => {
  try {
    if (argv.deleteOne) {
      const deleteOne = await Plant.deleteOne({
        [argv.key]: argv.value,
      });
      console.log(deleteOne);
    } else if (argv.deleteMany) {
      const deleteMany = await Plant.deleteMany({
        [argv.key]: argv.value,
      });
      console.log(deleteMany);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = deletePlant