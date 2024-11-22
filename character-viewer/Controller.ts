import Character from "./character";
const express = require("express");
const {request: Req} = require("express");
const {response: Res} = require("express");

    export let allCharacters = (req: typeof Req, res: typeof Res) => {
        Character.find().then((characters) => {
           res.send(characters);
        });
    };
    export let getCharacter = (req: typeof Req, res: typeof Res) => {
        Character.findById(req.params.id).then((character) => {
            res.send(character);
        });
    };
    export let deleteCharacter = (req: typeof Req, res: typeof Res) => {
        Character.deleteOne({id: req.params.id}).then((character) => {
            res.send("Successfully Deleted Character");
        });
    };
    export let updateCharacter = (req: typeof Req, res: typeof Res) => {
        console.log(req.body);
        Character.findByIdAndUpdate(req.params.id, req.body,).then((character) => {
                res.send("Successfully updated book!");
            }
        );
    };
    export let addCharacter = (req: typeof Req, res: typeof Res) => {
        try {
            let character = new Character(req.body);
            character.save();
            res.send(character);
        } catch (err) {
            res.send(err);
        }
    };

export default {allCharacters, getCharacter, deleteCharacter, updateCharacter, addCharacter};