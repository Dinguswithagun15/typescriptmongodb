import * as mongoose from "mongoose";

const uri = "mongodb+srv://adamcaldwell15:PinkZebra21*@charactercluster.lra1z.mongodb.net/?retryWrites=true&w=majority&appName=CharacterCluster";

try {
     mongoose.connect(uri);
} catch (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully Connected!");
    }
}

export interface ICharacter extends mongoose.Document {
    alias: string;
    name: string;
}

export const CharacterSchema = new mongoose.Schema({
    alias: { type: String, required: true },
    name: { type: String, required: true }
});

const Character = mongoose.model<ICharacter>("Character", CharacterSchema);
export default Character;
