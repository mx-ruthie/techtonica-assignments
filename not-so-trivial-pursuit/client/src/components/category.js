/*each category button will have
create a button with the names of each category
have a state that will determine if the box is filled or not
fetch the api according to the category
have one question from that category
function that we pass into question-render in order to get callback data
function correct/incorrect(data) 
if (data === correct)
fill the box
else 
do nothing

data!
question - vvvvvvvvv to child
user input right or wrong? vvvvvvvvv from question-render (child)
user input right or wrong? ^^^^^^^^^^ to App.js (parent) (callback)

*/
import {useState, useEffect} from "react";


const Category = ({name, className}) => {
  return(
    <>
      <button className={className}>{name}</button>
    </>
  )
}

export default Category;








// function Question (props) {
//   const {questionText} = props;
//   return(
//     <div>
//       {questionText}
//     </div>
//   );
// };

//export default Question;