console.log("First log");

// Try / Catch
function makeError() {
  try {
    const name = "Wolf";
    name = "NotWolf";
  } catch (err) {
    console.error(err);
  }
}

console.log("Second log");

// Example of throwing error
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Passed parameter is not a number");
  }
  return a * b;
}

function doSomeMath(a, b) {
  try {
    const result = multiply(a, b);

    // This will not trigger because we threw an error in the multiply function
    console.log("result", result);
  } catch (error) {
    console.log(error.name);
    console.log(error.stack);
    console.log(error.message);
  }
}

doSomeMath(1, "hey");
