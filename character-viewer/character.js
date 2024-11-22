"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSchema = void 0;
var mongoose = require("mongoose");
var uri = "mongodb+srv://adamcaldwell15:PinkZebra21*@charactercluster.lra1z.mongodb.net/?retryWrites=true&w=majority&appName=CharacterCluster";
try {
    mongoose.connect(uri);
}
catch (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully Connected!");
    }
}
exports.CharacterSchema = new mongoose.Schema({
    alias: { type: String, required: true },
    name: { type: String, required: true }
});
var Character = mongoose.model("Character", exports.CharacterSchema);
exports.default = Character;
