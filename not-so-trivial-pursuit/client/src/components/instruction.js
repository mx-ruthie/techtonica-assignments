/*
If the answer is correct, you can no longer select that category (ideally)
Correct answer met with "Correct! Choose another category."
*/

const Header = () => {
  return(
    <div className={"textHeader"}>
      <h1>Not-So-Trivial Pursuit</h1>
      <ul>
        <li>Select a category</li>
        <li>You get a "pie piece" for every correct answer, meaning the button gets filled.</li>
        <li>If the answer is correct, you can no longer select that category (ideally)</li>
        <li>Once you have answered a question correctly from each category, you win.</li>
      </ul>
    </div>
  );
};

export default Header;
