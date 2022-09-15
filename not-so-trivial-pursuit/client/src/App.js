import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Header from './components/instruction';
import Category from './components/category';

const categories = ["Geography", "Entertainment", "History", "Art", "Science and Nature", "Sports and Leisure"];

// categories.map((category) => {
//   <Category name={category}/>
//   }
  

function App() {
  
  return (
    <div className="App">
      <Header />
      {/* <Question questionText={"Question goes here"}/> */}
      {categories.map((category, index) => {
        return(
        <Category name={category} key={index}/>
      )}
      )}
      
    </div>
  );
}

export default App;
