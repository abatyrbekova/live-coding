// ! Named export - exporting just this variable
export const screws = {
  diameter: "1cm",
  length: "4cm",
};

// ? import { screws } from 'path/to/the/file'
// ? import { screws } from 'path/to/the/file'

// ! Named exports - exporting multiple variables at once
const x = "yes";
const y = "no";

export { x, y };

// ? import { x, y } from 'path/to/the/file'

// Renaming an export
const arr = [];

export { arr as newArr };

// ? import { newArr } from 'path/to/the/file'

// ! Default export - only one default export per module/file
const nails = {
  diameter: "1.5cm",
  length: "3cm",
};

export default nails;

// ? import anyName from 'path/to/the/file'

// ! Importing all of them under Screws namespace
// ? import * as Screws from "./screws.js";
// Example: Screws.nails, Screws.x, Screws.screws

// ! Rename when importing - we have to use the newArrTwo
// ? import { newArr as newArrTwo } from 'path/to/the/file'
