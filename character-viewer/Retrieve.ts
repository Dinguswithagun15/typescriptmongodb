import {Collection, MongoClient} from "mongodb";

const uri = "mongodb+srv://adamcaldwell15:PinkZebra21*@charactercluster.lra1z.mongodb.net/?retryWrites=true&w=majority&appName=CharacterCluster";
const client = new MongoClient(uri);

interface Character {
    "alias": string;
    "name": string;
}

export default async function retrieve(): Promise<Collection<Character>> {
    try {
        await client.connect();
        const database = client.db("test");
        return database.collection<Character>("characters");
    } finally {
        await client.close();
    }
}