/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-17 20:09:40
 * Creación del servidor 
 * Creation of the server
 ******************************************************************************/
import express from "express";

import { PORT } from "./config.js";

const app = express();

// método get
app.get("/", (req, res) => {
  res.send("Hello Pets");
});
app.get("/protected", (req, res) => {});

// método post
app.post("/login", (req, res) => {
    res.json({user:"3dl3rw0lf"});
});
app.post("/register", (req, res) => {
    res.json({user: "wgeni@"});
});
app.post("/logout", (req, res) => {});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
