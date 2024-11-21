import Character from "./character";
const express = require("express");
const {request: Req} = require("express");
const {response: Res} = require("express");

    export let allCharacters = (req: typeof Req, res: typeof Res) => {
        let characters = Character.find((err: any, characters: any) => {
            if (err) {
                res.send("Error!");
            } else {
                res.send(characters);
            }
        });
    };
    export let getCharacter = (req: typeof Req, res: typeof Res) => {
        let character = Character.findById(req.params.id, (err: any, character: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(character);
            }
        });
    };
    export let deleteCharacter = (req: typeof Req, res: typeof Res) => {
        let character = Character.deleteOne({_id: req.params.id}, (err: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Successfully Deleted Character");
            }
        });
    };
    export let updateCharacter = (req: typeof Req, res: typeof Res) => {
        console.log(req.body);
        let character = Character.findByIdAndUpdate(
            req.params.id,
            req.body,
            (err: any, character: any) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Successfully updated book!");
                }
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