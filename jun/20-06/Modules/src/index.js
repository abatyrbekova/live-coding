// Start with libraries
import { isEmpty } from "lodash";

// Functions
import buildTable from "./table.js";
import buildChair from "./chair.js";

// IIFE = Immediately Invoked Function Expression
// - it is useful because it prevents us from adding
//   varaibles to the Window object
(function () {
  var userName = "Andrej";
  var div = document.getElementById("root");
  var userNames = ["Andrej", "Mary", "Phillip"];

  userNames.forEach((name) => {
    var p = document.createElement("p");
    p.innerText = name;
    div.append(p);
  });
})();

const obj = {};
const objTwo = { name: "yes" };

console.log("isEmpty:", isEmpty(obj));
console.log("isEmpty two:", isEmpty(objTwo));

console.log("table: ", buildTable());
console.log("chair: ", buildChair());
