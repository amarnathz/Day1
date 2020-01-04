const click1 = document.getElementById("mealbutton");
const descmeal = document.getElementById("des_meal");
click1.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
      createmeal(res.meals[0]);
    })
    .catch(e => `<h5> ${console.error(e)} <h5>`);
});

const createmeal = meal => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]}   -    ${meal[`strMeasure${i}`]}       `
      );
    } else {
      break;
    }
  }
  const dhtml = `
  <div class="f1">
<div class="f"> 
<img src="${meal.strMealThumb}"  id="img1" alt="MEAl IMAGE" >
<div class="si">

${
  meal.strCategory
    ? `<p ><strong id="title">Category: </strong>${meal.strCategory}</p>`
    : ""
}
${
  meal.strArea
    ? `<p ><strong id="title">Area: </strong>${meal.strArea}</p>`
    : ""
}
${
  meal.strTags
    ? `<p ><strong id="title">Tags: </strong> ${meal.strTags
        .split(",")
        .join(", ")}</p>`
    : ""
}
<h3>Ingredients: </h3>
  <ul >
   ${ingredients.map(ingredients => `<li>${ingredients}</li>`).join("")} 
   </ul>
 </div> 
 
 </div>

 <div  class="th">
        <h4 id="title">${meal.strMeal}</h4>
        <p id=" content ">${meal.strInstructions}</p>
      </div>
      </div>

`;
  descmeal.innerHTML = dhtml;
};
