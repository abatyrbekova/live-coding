import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");

const promiseOfModal = () => {
  return new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve(modal);
    }, 1000 * 5);
  });
};
async function showModal() {
  const result = await promiseOfModal();
  result.style.display = "block";
}

showModal();

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

const button = document.getElementById("continue");

button.addEventListener("mouseover", () => {
  animationEnds();
});

function animationStart(element) {
  return new Promise((resolve) => {
    element.addEventListener("animationend", () => {
      resolve(element);
    });
  });
}

async function animationEnds() {
  const result = await animationStart(button);
  result.style.backgroundColor = "blue";
  setTimeout(() => {
    alert("Continue to subscribe");
  }, 100);
}
