//This will be the server index

import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;
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