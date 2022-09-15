const QuestionRender = (props) => {
  
  return(
  <div className={"question-section"}>
    <div className="question-text">{props.question.question}</div>
    <div className="answer-section">
          <button>True</button>
          <button>False</button>
    </div>

  </div>
  );
};

//need submit button
//need Correct! Choose another category. message
//need Incorrect! Try this category again or choose another category. message
export default QuestionRender;
