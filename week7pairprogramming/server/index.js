//This will be the server index

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = 8080;
dotenv.config();
/*
An array of student objects to show my 2 pm class
const students = [
  {firstname: "Lisa", lastname: "Lee"},
  {firstname: "Cristina", lastname: "Rodriguez"},
  {firstname: "Diana", lastname: "Olivas"},
  {firstname: "Andrea", lastname: "Sanchez"},
  {firstname: "Paola", lastname: "Trejo"},
]
*/
//configuring cors middleware
app.use(cors());

app.get('/', (req, res) => {
  res.json("howdy")
});

app.get('/api/students', (req, res) => {
  const STUDENTS = [
    {firstname: "Lisa", lastname: "Lee"},
    {firstname: "Cristina", lastname: "Rodriguez"},
    {firstname: "Diana", lastname: "Olivas"},
    {firstname: "Andrea", lastname: "Sanchez"},
    {firstname: "Paola", lastname: "Trejo"}
]

res.json(STUDENTS);

})
app.listen(PORT, () => console.log(`HOLA! Server running on Port http://localhost:${PORT}`));
const API_KEY= process.env.API_KEY;
// First fetch request 
app.get('/weather', (req, res) => { 
  const city = req.query.cityName; 
  const apiKey = API_KEY; 
  const params = new URLSearchParams({ 
    q: req.query.cityName, 
    appid: apiKey, 
    units: 'imperial', 
  }); 
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`; 
  console.log(url); 
  fetch(url) 
    .then((res) => res.json()) 
    .then((data) => { 
      res.send({ data }); 
    }) 
    .catch((err) => { 
      console.log(err); 
    }); 
  });
  //wrote this console.log to test and make sure the API_KEY import was working
  //console.log("test", API_KEY);