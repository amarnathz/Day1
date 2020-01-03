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

  for (let i = 0; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]}   -    ${meal[`strMeasure${i}`]}       `
      );
    } else {
      break;
    }
  }
  const dhtml = `
<div> 
<div>
<img src="${meal.strMealThumb}" alt="MEAl IMAGE" >
${
  meal.strCategory
    ? `<p><strong>Category: </strong>${meal.strCategory}</p>`
    : ""
}
${meal.strArea ? `<p><strong>Area: </strong>${meal.strArea}</p>` : ""}
${
  meal.strTags
    ? `<p><strong>Tags: </strong> ${meal.strTags.split(",").join(", ")}</p>`
    : ""
}
<h5>Ingredients: </h5>
  <ul>
   ${ingredients.map(ingredients => `<li>${ingredients}</li>`).join("")} 
   </ul>
 </div>  
 <div >
        <h4>${meal.strMeal}</h4>
        <p>${meal.strInstructions}</p>
      </div>
</div>
`;
  descmeal.innerHTML = dhtml;
};
