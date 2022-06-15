// # Extreme Travel Website!

// **Instructions**:
// * Select the `header` that is the closest to
// the first `h1` heading. Give the `header` a
// solid border of 5px. ![alt text](images/header.png "Header")

// const h1 = document.querySelector("h1");
// const header = h1.closest("header");
// header.classList.add("borderGray");

// const infoSection = document.querySelector(".info");
// const infoPackage = document.querySelectorAll(".info-package");
// const packageTitles = document.querySelectorAll(".package-title");

// function logName(name) {
//   console.log(name);
// }

// function (param) {
//     console.log(param);
//   }

// (name)=>{console.log(name)}

// Parameters
// (['John', 'Mary', 'Steve'], logName)
// function forEach(array, cb) {
//   // 3
//   for (let i = 0; i < array.length; i++) {
//     cb(array[i]);
//     //logName('John')
//     // console.log('John')
//   }
// }

// * If the `.info` section contains an `.info-package`,
// select all `package-title`s and give the title's previous
// element a border.

// [
// {htmlTag:'section', className: 'info-package'},
// {htmlTag:'section', className: 'info-package'},
// {htmlTag:'section', className: 'info-package'},
// {htmlTag:'section', className: 'yes-no'},
// ]
// const infoChildren = document.querySelector(".info").children;

// const main = document.querySelector("main");
// const div = main.querySelector("div");

// for (const element of infoChildren) {
//   if (element.matches(".info-package")) {
//     const packageTitles = element.querySelectorAll(".package-title");

//     packageTitles.forEach(
//       (title) => (title.previousElementSibling.style.border = "solid 2px")
//     );
//   }
// }

// if (infoSection.contains(infoPackage)) {
//   packageTitles.forEach(
//     (title) => (title.previousElementSibling.style.border = "solid 2px")
//   );
// }

// * Check if the label's class matches "mild".
//  If so, give the label a yellow solid border.
//  If the label's class matches "intense",
// give the label an orange solid border.
// If the class does not match either, give the
//  label a red solid border.

// const labels = document.querySelectorAll(".info lasbel");

const calculatePrice = (obj) => ({
  finalPrice: obj.originalPrice - obj.discount,
  ...obj,
});

function log() {}

// finalPrice
const kebabPrices = [
  { originalPrice: 3.5, discount: 1, shop: "Rosenthaler Platz" },
  { originalPrice: 4, discount: 0.5, shop: "Neukoln" },
  { originalPrice: 4, discount: 0.5, shop: "Neukoln" },
  { originalPrice: 4, discount: 0.5, shop: "Neukoln" },
  { originalPrice: 4, discount: 0.5, shop: "Neukoln" },
  { originalPrice: 4, discount: 0.5, shop: "Neukoln" },
  { originalPrice: 4, discount: 0.5, shop: "Neukoln" },
  { originalPrice: 4, discount: 0.5, shop: "Neukoln" },
];

const drinkPrices = [];

const finalPrices = kebabPrices.map((kebab) => calculatePrice(kebab));

function map(array, cb) {
  let arr = [
    {
      originalPrice: 3.5,
      discount: 1,
      shop: "Rosenthaler Platz",
      finalPrice: 2.5,
    },
    {
      originalPrice: 4,
      discount: 0.5,
      shop: "Neukoln",
      finalPrice: 3.5,
    },
  ];

  for (let i = 1; i < array.length; i++) {
    const newObject = cb(array[i]);

    const news = calculatePrice({
      originalPrice: 4,
      discount: 0.5,
      shop: "Neukoln",
      finalPrice,
    });

    arr.push(news);
  }

  return arr;
}

drinkPrices.map(calculatePrice);

console.log(finalPrices);

// * Add all the children of the `.nav-list` to
// the footer's unordered list, `.site-map`.
//  Note: the `.nav-list` should still contain
// its children.

// **Bonus**
// After you completed the assignment and published the solution branch, you can create a new branch `feature/restyle` and change the design of the landing-page. You can publish it on GitHub Pages when you are satisfied with the result.
