import { screws } from "./screws.js";
import { legs } from "./legs.js";

function buildTable() {
  return {
    legs,
    screws,
    top: { diameter: "80cm" },
  };
}

export default buildTable;
