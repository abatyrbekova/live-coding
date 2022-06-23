// Databse with users
const users = [
  { id: 1, name: "John", lastName: "Doe" },
  { id: 2, name: "Maria", lastName: "Sanchez" },
];

// Database with posts
const posts = {
  Doe: ["John's post", "Second post"],
  Sanchez: ["Maria'post", "Fourth post"],
};

// Databse with groups
const groups = {
  Doe: ["John's group"],
  Sanchez: ["Maria's group"],
};

function getUser(id) {
  const user = users.find((us) => us.id === id);
  return Promise.resolve(user);
}

function getPosts(lastName) {
  const userPosts = posts[lastName];
  return Promise.resolve(userPosts);
}

function getGroups(lastName) {
  const userGroups = groups[lastName];
  return Promise.resolve(userGroups);
}

// Using promises
// ! Due to scoping issues, we are not able to pass the lastName to the
// ! getGroups function
getUser(1)
  // valOne =  { id: 1, name: "John", lastName: "Doe" }
  .then((valOne) => getPosts(valOne.lastName))
  // valTwo =  ["John's post", "Second post"]
  .then((valTwo) => getGroups(valTwo.lastName));

// Async await - We can use await keyword only inside a function that was declared with async
async function getUserData() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.lastName);
    const groups = await getGroups(user.lastName);

    // ! Posts and groups depend on the user, but they do not depend on each other.
    // We can use Promise.all() method so that the promises get resolved in parallel
    // instead of groups waiting for posts to resolve first.
    // ! Notice that in that case, we would have to remove await in front of the function call.

    // const posts =  getPosts(user.lastName);
    // const groups =  getGroups(user.lastName);
    // const all = Promise.all([posts, groups]);
    // return all;

    return [posts, groups];
  } catch (error) {
    console.log(error);
  }
}

// Async await syntax using an arrow function
const getData = async () => {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.lastName);
    const groups = await getGroups(user.lastName);

    return [posts, groups];
  } catch (error) {
    console.log(error);
  }
};

// Usage of getUser
getUserData().then((data) => {
  console.log(data);
});
