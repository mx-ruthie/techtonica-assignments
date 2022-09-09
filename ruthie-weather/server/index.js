import express from 'express';
import cors from 'cors';

const app = express();
const PORT= 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.json("hello from techtonica");
});

app.get("/api/students", (req, res) => {
  const STUDENTS = [
{firstname: "Lisa", lastname: "Lee"},
{firstname: "Cristina", lastname: "Rodriguez"},
{firstname: "Diana", lastname: "Olivas"},
{firstname: "Andrea", lastname: "Sanchez"},
{firstname: "Paola", lastname: "Trejo"}
  ];
  res.json(STUDENTS);
});

app.listen(PORT, () => 
  console.log(`Hola! Server is running on port${PORT} `)
  );
