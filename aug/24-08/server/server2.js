import express from "express"; // type: module

// const express = require("express");  // type: commonjs

const app = express();

app.listen(8000, ()=> console.log("server is running on port 8000"));

// endpoint 1: expects a GET request to the path (URI/URL): http://localhost:8000 and sends a response which is a json object {"name":"john"}
app.get("/", (req, res) => {
    // here comes data from database if needed
  res.send({ "name": "John" });
});

// endpoint 2: expects a GET request to the path (URI/URL): http://localhost:8000/login/someName and sends a response which is a string `welcome someName`
app.get("/login/:name", (req, res) => {
  res.send(`welcome ${req.params.name}`);
});
