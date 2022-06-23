// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
// }, 2000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow";
// }, 4000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
// }, 6000);

// ! Callback hell
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "orange";
//     }, 2000);
//   }, 2000);
// }, 2000);

// ! Writing the same with a promise
function changeBackgroundColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

changeBackgroundColor("red", 1000)
  .then(() => changeBackgroundColor("blue", 1000))
  .then(() => changeBackgroundColor("orange", 1000));
