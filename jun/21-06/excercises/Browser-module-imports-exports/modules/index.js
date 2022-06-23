// Percentage calculations
import { difference, modulo, percentage, percentageOf } from "./percentage.js";

// Aspect ratio
import { calculateAspectRatio } from "./aspect-ratio.js";
// Modulo form
const moduloForm = document.getElementById("modulo-form");

moduloForm.addEventListener("change", () => {
  const firstInput = document.getElementById("modulo_1").value;
  const secondInput = document.getElementById("modulo_2").value;
  const resultInput = document.getElementById("modulo_result");

  resultInput.value = modulo(Number(firstInput), Number(secondInput));
});

// Percentage form
const percentageForm = document.getElementById("percentage-form");

percentageForm.addEventListener("change", () => {
  const firstInput = document.getElementById("percentage_1").value;
  const secondInput = document.getElementById("percentage_2").value;
  const resultInput = document.getElementById("percentage_result");

  resultInput.value = percentage(Number(firstInput), Number(secondInput));
});

// Percentage of form
const percentageOfForm = document.getElementById("percentageOf-form");

percentageOfForm.addEventListener("change", () => {
  const firstInput = document.getElementById("percentageOf_1").value;
  const secondInput = document.getElementById("percentageOf_2").value;
  const resultInput = document.getElementById("percentageOf_result");

  resultInput.value = percentageOf(Number(firstInput), Number(secondInput));
});

// Difference form
const differenceForm = document.getElementById("difference-form");

differenceForm.addEventListener("change", () => {
  const firstInput = document.getElementById("difference_1").value;
  const secondInput = document.getElementById("difference_2").value;
  const resultInput = document.getElementById("difference_result");

  resultInput.value = difference(Number(firstInput), Number(secondInput));
});

// Aspect ratio form

const aspectRatioForm = document.getElementById("aspect-form");

aspectRatioForm.addEventListener("change", (e) => {
  const originalWidth = document.getElementById("ratio_1").value;
  const originalHeight = document.getElementById("ratio_2").value;

  const resultWidth = document.getElementById("ratio_result-width");
  const resultHeight = document.getElementById("ratio_result-height");

  switch (e.target.id) {
    case "ratio_result-width":
      resultHeight.value = calculateAspectRatio(
        Number(originalWidth),
        Number(originalHeight),
        Number(resultWidth.value),
        "w"
      );

    case "ratio_result-height":
      resultWidth.value = calculateAspectRatio(
        Number(originalWidth),
        Number(originalHeight),
        Number(resultHeight.value),
        "h"
      );
  }
});
