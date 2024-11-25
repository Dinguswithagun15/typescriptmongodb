import React from "react";
import * as mongoose from "mongoose";
import * as mongodb from "mongodb";
import './index.css';

interface Character {
  alias: string,
  name: string
}

const characterSchema = new mongoose.Schema({
  alias: String,
  name: String
});

export default async function Page() {
  const uri = "mongodb+srv://adamcaldwell15:PinkZebra21*@charactercluster.lra1z.mongodb.net/?retryWrites=true&w=majority&appName=CharacterCluster"; 
  const client = new mongodb.MongoClient(uri);
  await client.connect();
  const database = client.db("test");
  const characters: mongoose.Collection<Character> = database.collection<Character>("characters");
  const cursor: mongodb.FindCursor<characterSchema> = characters.find();
  const docs = await cursor.toArray();
  await client.close();
  return (
    <div key="Characters" id="characters">
      <h2 id="charactersHeader">Characters</h2>
      <div key="Entries" id="entries">
        {docs.map((doc) => <Entry key={doc.id} alias={doc.alias} name={doc.name} alignment={doc.alignment} description={doc.description} abilities={doc.abilities}/>)}
      </div>
    </div>
  )
}

function Entry(props) {
  return (
    <div className="entry" key={props.key}>
      <p className="field">{props.alias}</p>
      <p className="field">{props.name}</p>
      <p className="field">{props.alignment}</p>
      <p className="field">{props.description}</p>
    </div>
  )
}