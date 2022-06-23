// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
// \/ All of your javascript should go here \/

import { jsonRecipes } from "./data.js";

const recipes = JSON.parse(jsonRecipes);

const sections = [
  document.getElementById("cakes"),
  document.getElementById("biscuits"),
  document.getElementById("bread"),
];

Object.entries(recipes).forEach((tuple) => {
  tuple[1].map((recipe) => {
    sections.forEach((section) => {
      console.log(section.id);
      if (recipe.type === section.id) {
        section.innerHTML += `<div class="card m-3" style="width: 18rem"><img class="card-img-top" height="200rem" src=${
          recipe.image
        }>
        <div class="card-body">
        <h4 class="card-title">${recipe.title}</h4><h6>${
          recipe.author
        }</h6><p class="border-top border-secondary pt-2">Ingredients: ${recipe.ingredients.join(
          ", "
        )}</p></div></div>`;
      }
    });
  });
});
