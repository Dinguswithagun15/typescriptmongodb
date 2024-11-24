import React from "react";
import CharacterTable from "./characterTable";
import {Collection, MongoClient} from "mongodb";

interface Character {
  "alias": string;
  "name": string;
}

export default async function Page() {
  const uri = "mongodb+srv://adamcaldwell15:PinkZebra21*@charactercluster.lra1z.mongodb.net/?retryWrites=true&w=majority&appName=CharacterCluster"; 
  const client = new MongoClient(uri);
  await client.connect();
  const database = client.db("test");
  const characters: Collection<Character> = database.collection<Character>("characters");
  await client.close();
  return (
    <CharacterTable characters={characters}/>
  )
}