// API: https://jsonplaceholder.typicode.com/

// ! Example using promises
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "My title",
//     body: "My body",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data));

const div = document.getElementById("root");
const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

// ! Example using async
async function addPost(titleText, bodyText) {
  try {
    // The fetch function will return the Response object
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: titleText,
        body: bodyText,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // We will convert the Response.body into a javascript value
    const post = await response.json();

    return post;
  } catch (error) {
    console.log(error);
  }
}

// ! We want to get the user input and add submit it
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleText = titleInput.value;
  const bodyText = bodyInput.value;

  addPost(titleText, bodyText).then((post) => {
    console.log(post);
    const element = `<div>
                    <p>${post.title}</p>
                    <p>${post.body}</p>
                  </div>`;

    div.innerHTML += element;
  });
});
