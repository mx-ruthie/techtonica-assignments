const express = require("express");

//determinate your port
const PORT = process.env.PORT || 5001;

//create an express app for you
const app = express()

//create a get request (router)
app.get("/", (req, res) => {
  res.json("Hello from Techtonica! Hola todos!");
});

app.listen(PORT, () => {
  console.log(`Hola! Server is listening on ${PORT}`);
});