require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const mongoose = require("mongoose");
const Plant = require("./attributes/plants");
const addPlant = require("./utils/add");
const deletePlant = require("./utils/delete");
const findPlant = require("./utils/find");
const updatePlant = require("./utils/update");

(async () => {
    mongoose.connect(process.env.MONGO_URI);
    await Plant.syncIndexes();

    if (argv.addPlant) {
        await addPlant(argv);
    } else if (argv.deletePlant) { 
        await deletePlant(argv);
    } else if (argv.findPlant) {
        await findPlant(argv);
    } else if (argv.updatePlant) {
        await updatePlant(argv);
    } else if (argv.list){
        const plantLibrary = await Plant.find({ Plant });
        console.log({ plantLibrary });
    }

    await mongoose.connection.close();
})();
