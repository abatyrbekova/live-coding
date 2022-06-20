// IIFE = Immediately Invoked Function Expression
(function () {
  var userName = "Andrej";
  var div = document.getElementById("root");
  var userNames = ["Andrej", "Mary", "Phillip"];

  userNames.forEach((name) => {
    var p = document.createElement("p");
    p.innerText = name;
    div.append(p);
  });
})();
