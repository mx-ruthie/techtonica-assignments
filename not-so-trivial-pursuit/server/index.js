import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 8082;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// app.get("/", (req, res) => {
//   res.send("Hello Techtonica Server for a Game");
// });


app.get("/api/game", (req, res) => {
//   const params = new URLSearchParams({
//     amount: question.querstion,
//     category: question.correct_answer,
//     type: question.incorrect_answers 
//   });
//   console.log(params);
const url = `https://opentdb.com/api.php?amount=10&category=25&type=multiple`;
console.log(url);
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    res.send(data);
  });
})


;


  // useEffect(() => {
  //     let promise = new Promise((resolve, reject) => {
  //       fetch("https://opentdb.com/api.php?amount=1&category=25&type=multiple")
  //         .then((response) => {return response.json()})
  //         .then((data) => {
  //           console.log(data.results[0])
  //         setQuestion(data.results[0]); //setting the state to the whole object
  //         });
  //     })
  // }, [category]); 

  app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
