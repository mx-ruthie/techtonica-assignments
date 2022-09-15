const RadioButton = ({answer, index, onValueChange}) => {
 let id = `${index}-choice`;
  return( 
  <div>
    <input type="radio" id={id} name="answer" value={answer} onChange={onValueChange}/>
    <label for={id}>{answer}</label>
  </div>  
)};

const QuestionRender = ({question}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
}
  const onValueChange = (evt) => {
    console.log(evt.target.value);
  }
  return (
    question && (
      <div className={"question-section"}>
      <div className="question-text">{question.question}</div>
      <div className="answer-section">
        <form onSubmit={handleSubmit}>
          <RadioButton answer={question.incorrect_answers[0]} onValueChange={onValueChange}/>
          <RadioButton answer={question.incorrect_answers[1]} onValueChange={onValueChange}/>
          <RadioButton answer={question.correct_answer} onValueChange={onValueChange}/>
          <RadioButton answer={question.incorrect_answers[2]} onValueChange={onValueChange}/>
          <button type="submit">Submit Answer</button>
        </form>
      </div>

    </div>)
  );
};

//need submit button
//need Correct! Choose another category. message
//need Incorrect! Try this category again or choose another category. message
export default QuestionRender;
