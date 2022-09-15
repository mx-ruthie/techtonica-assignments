import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Header from './components/instruction';
import Category from './components/category';
import QuestionRender from "./components/question-render";

const categories = ["Geography", "Entertainment", "History", "Art", "Science", "Sports"];

// categories.map((category) => {
//   <Category name={category}/>
//   }
  

function App() {

  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("Art");
    useEffect(() => {
        let promise = new Promise((resolve, reject) => {
          fetch("https://opentdb.com/api.php?amount=1&category=25&type=multiple")
            .then((response) => {return response.json()})
            .then((data) => {
              console.log(data.results[0])
            setQuestion(data.results[0]); //setting the state to the whole object
            });
        })
    }, [category]); 
  return (
    <div className="App">
      <Header />
      {/* <Question questionText={"Question goes here"}/> */}
      
      {categories.map((category) => {
        return(
        <Category name={category} key={`${category}-btn`} className={`${category}-btn`} />
      )}
      )}
      <QuestionRender question={question}/>
      
    </div>
  );
}

export default App;
