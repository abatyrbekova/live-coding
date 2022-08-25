export const myFunc = (num = 10, str = "hi") => {   // export is for type: module
  console.log("*".repeat(num));
  console.log(str);
  console.log("*".repeat(num));
};

export const myVar = 5;

// module.exports = { myFunc, myVar }; // type: commonjs
