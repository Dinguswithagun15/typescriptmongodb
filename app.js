"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Req = require("express").request;
var Res = require("express").response;
var Controller_1 = require("./Controller");
var app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);
app.get("/", function (req, res) { res.send("hi"); });
app.get("/characters", Controller_1.default.allCharacters);
app.get("/character/:id", Controller_1.default.getCharacter);
app.get("/character", Controller_1.default.addCharacter);
app.get("/character/:id", Controller_1.default.updateCharacter);
app.get("/character/:id", Controller_1.default.deleteCharacter);
var server = app.listen(app.get("port"), function () {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
