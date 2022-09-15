import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Header from './components/instruction';
import Category from './components/category';

const categories = ["Geography", "Entertainment", "History", "Art", "Science", "Sports"];

// categories.map((category) => {
//   <Category name={category}/>
//   }
  

function App() {
  
  return (
    <div className="App">
      <Header />
      {/* <Question questionText={"Question goes here"}/> */}
      {categories.map((category) => {
        return(
        <Category name={category} key={`${category}-btn`} className={`${category}-btn`}/>
      )}
      )}
      
    </div>
  );
}

export default App;
