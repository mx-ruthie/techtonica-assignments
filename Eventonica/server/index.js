import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000

app.use(cors());
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#defining_and_using_separate_route_modules
//const express = require("express"); - don't need this line because I already imported expres on ln 1
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello");
});

router.get("/events", function (req, res) {
  //console.log(req); experiment to see what the req object does
  const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };
  
  const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };
  
  const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };

  let eventsArray = [event1, event2, event3];

  res.send(eventsArray);
  //make a request to the db to get all events
  //return the event json to the users as a response
  
});

router.get("/users", function (req, res) {
  res.send("Hello this is users");
});



app.use("/", router);




app.listen(PORT, () => console.log(`Heck yeah, Ruthie, you got your server going on PORT ${PORT}`));
