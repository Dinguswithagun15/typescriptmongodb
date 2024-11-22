"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCharacter = exports.updateCharacter = exports.deleteCharacter = exports.getCharacter = exports.allCharacters = void 0;
var character_1 = require("./character");
var express = require("express");
var Req = require("express").request;
var Res = require("express").response;
var allCharacters = function (req, res) {
    character_1.default.find().then(function (characters) {
        res.send(characters);
    });
};
exports.allCharacters = allCharacters;
var getCharacter = function (req, res) {
    character_1.default.findById(req.params.id).then(function (character) {
        res.send(character);
    });
};
exports.getCharacter = getCharacter;
var deleteCharacter = function (req, res) {
    character_1.default.deleteOne({ id: req.params.id }).then(function (character) {
        res.send("Successfully Deleted Character");
    });
};
exports.deleteCharacter = deleteCharacter;
var updateCharacter = function (req, res) {
    console.log(req.body);
    character_1.default.findByIdAndUpdate(req.params.id, req.body).then(function (character) {
        res.send("Successfully updated book!");
    });
};
exports.updateCharacter = updateCharacter;
var addCharacter = function (req, res) {
    try {
        var character = new character_1.default(req.body);
        character.save();
        res.send(character);
    }
    catch (err) {
        res.send(err);
    }
};
exports.addCharacter = addCharacter;
exports.default = { allCharacters: exports.allCharacters, getCharacter: exports.getCharacter, deleteCharacter: exports.deleteCharacter, updateCharacter: exports.updateCharacter, addCharacter: exports.addCharacter };
