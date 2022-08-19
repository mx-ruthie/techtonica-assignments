//https://sebhastian.com/coin-flip-javascript/
function headsOrTails(){
//  let result = "";
  let number = Math.random();
  if(number < .5){
    return "heads";
  } else {
    return "tails";
  }
}
//document.getElementById("click").onclick = headsOrTails;

let coinForm = document.getElementById("numcoins");

coinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let userValue = document.getElementsByClassName("uservalue")[0].value;
  console.log(userValue);
  let results = document.getElementById("results");
  let resultString = '';
  for(let i =0; i < userValue; i++){
    const whichSide = headsOrTails();
    resultString += `<div>${whichSide}</div>`;
  // const nextResult = document.createElement("div");
  // nextResult.innerHTML = whichSide;
  // console.log("next result", nextResult);
  // results.appendChild(nextResult);
  }
  results.innerHTML = resultString;
  
})
