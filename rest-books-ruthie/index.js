//this is my express server
import express, { application } from "express";
import cors from "cors";
import books from "./books.js";

const app = express();
const PORT = 8080;

//cors is the middleware that allows me to control
app.use(cors());

//create /api/books endpoint- GET request
app.get('/api/books', (req, resp) => {
    resp.json(books);
})

app.get('/', (req, resp) => {
  resp.send("Hello Techtonica this will be my first REST API");
})

app.listen(PORT, () => console.log(`Hola! Server running at ${PORT}`));
