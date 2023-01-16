const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const makeIngredientsList = textList => 
    textList.map(element => {
    const liEl = document.createElement("li");
    liEl.textContent = element;
    liEl.classList.add("item")
  
    return liEl;
  });

const ingredientsList = makeIngredientsList(ingredients);

listEl.append(...ingredientsList);

// =============================================================================

// const liEls = [];

// for (const ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add("item")
//   liEls.push(liEl);
// }

// // console.log(liEls);

// // listEl.append(...liEls);

// =============================================================================

// // const ingredientsList = ingredients.map(ingredient => {
// //   const liEl = document.createElement("li");
// //   liEl.textContent = ingredient;
// //   liEl.classList.add("item")
// //   return liEl;
// // })

// listEl.append(...ingredientsList);

// ============================================================================







