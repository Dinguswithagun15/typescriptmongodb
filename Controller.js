"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCharacter = exports.updateCharacter = exports.deleteCharacter = exports.getCharacter = exports.allCharacters = void 0;
var character_1 = require("./character");
var express = require("express");
var Req = require("express").request;
var Res = require("express").response;
var allCharacters = function (req, res) {
    var characters = character_1.default.find(function (err, characters) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(characters);
        }
    });
};
exports.allCharacters = allCharacters;
var getCharacter = function (req, res) {
    var character = character_1.default.findById(req.params.id, function (err, character) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(character);
        }
    });
};
exports.getCharacter = getCharacter;
var deleteCharacter = function (req, res) {
    var character = character_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted Character");
        }
    });
};
exports.deleteCharacter = deleteCharacter;
var updateCharacter = function (req, res) {
    console.log(req.body);
    var character = character_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, character) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated book!");
        }
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
