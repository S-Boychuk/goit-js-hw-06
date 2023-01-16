
const categoriesEl = document.getElementById("categories");
console.log(`Number of categories: ${categoriesEl.childElementCount}`);

const categoriesItems = categoriesEl.querySelectorAll(".item");
console.log(categoriesItems);

// // for (let i = 0; i < categoriesItems.length; i += 1) {
// //   const categoryTitleEl = categoriesItems[i].querySelector('h2');
// //   console.log(`Category: ${categoryTitleEl.textContent}`);

// //   const categoryListEl = categoriesItems[i].querySelector('ul');
// //   console.log(`Elements: ${categoryListEl.childElementCount}`);
// }


categoriesItems.forEach((element, index) => {
    const categoryTitleEl = categoriesItems[index].querySelector('h2');
    console.log(`Category: ${categoryTitleEl.textContent}`);
    
    const categoryListEl = categoriesItems[index].querySelector('ul');
    console.log(`Elements: ${categoryListEl.childElementCount}`);
});
