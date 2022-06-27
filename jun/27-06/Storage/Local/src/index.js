// Saving a string in the local storage

// Setting an item in the local storage - setItem
const userName = "Luke";
localStorage.setItem("userName", userName);

// Getting an item in the local storage - getItem
localStorage.getItem("userName");

// Removing item in local storage - removeItem
localStorage.setItem("name", "Luke");
localStorage.removeItem("name");

// Removing all items in local storage - clear method
localStorage.setItem("first", "First one");
localStorage.setItem("second", "Second one");

localStorage.clear();

// Getting the length of our local storage
localStorage.setItem("third", "Third one");
localStorage.setItem("fourth", "Fourth one");
localStorage.setItem("fifth", "Fifth one");

console.log(localStorage.length);

// Getting the key of an item on our storage via index

const firstKey = localStorage.key(1);
console.log("key", firstKey); // 'third'

// Saving an object in the local storage -
const obj = {
  name: "Luke",
  age: 22,
};

// When setting an object or an array in the local storage, we need to stringify it first

localStorage.setItem("userObject", JSON.stringify(obj));

// When getting an object or an array from the local storage, we need to parse it
const userObj = JSON.parse(localStorage.getItem("userObject"));

console.log("parsed: ", userObj);

console.log("without parsing:", localStorage.getItem("userObject"));

// The local storage data will be persisted. Meaning, if we close the tab and open it again,
// the data will still be there. To remove the data from the local storage, either we as developers do it
// through `clear` and `removeItem` methods, or the user can do it by accessing the `Application` tab in the
// developer tools.

function alertMe() {
  const isUserAlerted = localStorage.getItem("alerted"); // first time, it will return null, second time it will return 'true'

  console.log(isUserAlerted, " is alerted");
  if (!isUserAlerted) {
    alert("hello");

    localStorage.setItem("alerted", true);
  }
}

alertMe();
