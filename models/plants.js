const mongoose = require("mongoose");

const Plant = mongoose.model("Plant", {
    name: {
        type: String,
        unique: true,
    },
    fact: {
        type: String,
        unique: true,
    },
    botanicalName: {
    type: String,
    unique: true,
    },
    light: { 
        type: String,
        unique: false,
    },
    careLevel: {
        type: String,
        unique: false,
    },

});

module.exports = Plant;
