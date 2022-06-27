// Session storage

// When using session storage, we can use the exact same methods we use with local storage,
// but the data will be persisted only for that tab, and only for the duration of that session.
// In other words, as soon as you close the tab, all data stored in session storage will be lost.

function alertMe() {
  const isUserAlerted = sessionStorage.getItem("alerted"); // first time, it will return null, second time it will return 'true'

  console.log(isUserAlerted, " is alerted");
  if (!isUserAlerted) {
    alert("hello");

    sessionStorage.setItem("alerted", true);
  }
}

alertMe();
