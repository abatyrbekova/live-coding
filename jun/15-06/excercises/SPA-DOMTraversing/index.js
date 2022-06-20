// # Extreme Travel Website!

// **Instructions**:
// * Select the `header` that is the closest to
// the first `h1` heading. Give the `header` a
// solid border of 5px. ![alt text](images/header.png "Header")

const h1 = document.querySelector("h1");
const header = h1.closest("header");
header.classList.add("borderGray");

const infoSection = document.querySelector(".info");
const infoChildren = document.querySelector(".info").children;
const infoPackage = document.querySelector(".info-package");
const packageTitles = document.querySelectorAll(".package-title");

// * If the `.info` section contains an `.info-package`,
// select all `package-title`s and give the title's previous
// element a border.

for (const element of infoChildren) {
  if (element.matches(".info-package")) {
    const packageTitles = element.querySelectorAll(".package-title");

    packageTitles.forEach(
      (title) => (title.previousElementSibling.style.border = "solid 2px")
    );
  }
}

if (infoSection.contains(infoPackage)) {
  packageTitles.forEach(
    (title) => (title.previousElementSibling.style.border = "solid 2px")
  );
}

// * Check if the label's class matches "mild".
//  If so, give the label a yellow solid border.
//  If the label's class matches "intense",
// give the label an orange solid border.
// If the class does not match either, give the
//  label a red solid border.

const labels = document.querySelectorAll(".info label");

labels.forEach((label) => {
  if (label.matches(".mild")) {
    label.style.border = "2px solid yellow";
  } else if (label.matches(".intense")) {
    label.style.border = "2px solid orange";
  } else {
    label.style.border = "2px solid red";
  }
});

// * Add all the children of the `.nav-list` to
// the footer's unordered list, `.site-map`.
//  Note: the `.nav-list` should still contain
// its children.

const navListChildren = document.querySelector(".nav-list").children;
const siteMap = document.querySelector(".site-map");

for (let i = 0; i < navListChildren.length; i++) {
  const li = document.createElement("li");
  li.innerText = navListChildren[i].innerText;
  siteMap.appendChild(li);
}

// **Bonus**
// After you completed the assignment and published the solution branch, you can create a new branch `feature/restyle` and change the design of the landing-page. You can publish it on GitHub Pages when you are satisfied with the result.
