const container = document.getElementById('moreRecipes');
const btn = document.createElement('button');
btn.textContent = 'Print this Most Perfect Recipe';
btn.addEventListener("click", function() {
  print();
});
container.appendChild(btn);





//resource used for syntax : https://stackoverflow.com/questions/49864972/manipulate-dom-with-js-add-button-link
//<script type="text/javascript" src="recipe.js"></script>
