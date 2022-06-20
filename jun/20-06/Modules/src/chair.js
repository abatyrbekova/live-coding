import { screws } from "./screws.js";
import { legs } from "./legs.js";

function buildChair() {
  return {
    legs,
    screws,
    top: { diameter: "20cm" },
  };
}

export default buildChair;
