import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function Question(props) {
  const {questionText} = props;
  return(
    <div>
      {questionText}
    </div>
  )
}


function App() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("Art");
  useEffect(() => {
      let promise = new Promise((resolve, reject) => {
        fetch("https://opentdb.com/api.php?amount=1&category=25&type=multiple")
          .then((response) => {return response.json()})
          .then((data) => {
            console.log(data.results[0].question)
          setQuestion(data.results[0].question);
          });
      })
  }, [category]); 
  return (
    <div className="App">
      <Question questionText={question}/>
    </div>
  );
}

export default App;
