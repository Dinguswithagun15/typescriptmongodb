const express = require("express");
const {request: Req} = require("express");
const {response: Res} = require("express");

import controller from "./Controller";

const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

app.get("/", function(req: typeof Req, res: typeof Res) {res.send("hi")});

app.get("/characters", controller.allCharacters);
app.get("/character/:id", controller.getCharacter);
app.get("/character", controller.addCharacter);
app.get("/character/:id", controller.updateCharacter);
app.get("/character/:id", controller.deleteCharacter);

const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
})
