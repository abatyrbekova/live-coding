// API: https://jsonplaceholder.typicode.com/

const div = document.getElementById("root");
const button = document.getElementById("post");

// ! Example using promises
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((posts) => {
//     posts.forEach((post) => {
//       const element = `<div>
//                         <p>title: ${post.title}</p>
//                         <p>body: ${post.body}</p>
//                       </div>`;

//       div.innerHTML += element;
//     });
//   });

// ! Example using async await
async function getAllPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  posts.forEach((post) => {
    const element = `<div> 
                      <p>title: ${post.title}</p>
                      <p>body: ${post.body}</p>
                    </div>`;

    div.innerHTML += element;
  });
}

async function getPostById(id) {
  // The fetch function will return the Response object
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  // We will convert the Response.body into a javascript value
  const post = await response.json();

  const element = `<div>
                    <img src='${post.image}'>
                    <p>title: ${post.title}</p>
                    <p>body: ${post.body}</p>
                  </div>`;

  div.innerHTML += element;
}

let id = 1;

button.addEventListener("click", () => {
  if (id > 100) {
    return;
  }
  getPostById(id);
  id++;
});
