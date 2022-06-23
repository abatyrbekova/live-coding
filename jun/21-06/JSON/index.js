// JSON - lightweight format for storing and transporting data
const obj = {
  name: "Luke",
  age: 22,
};

console.log("obj: ", obj);

// Convert JS to JSON
const stringified = JSON.stringify(obj);

console.log("stringified", stringified);

// Convert JSON to JS
const parsed = JSON.parse(stringified);

console.log("parsed", parsed);
