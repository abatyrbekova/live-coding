function randomGreet(name) {
  const greetings = ["hola", "ciao", "hello", "hallo", "hey"];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[randomIndex];
  const message = `${greeting} ${name}`;

  return message;
}

const randomMessage = randomGreet("Jacob");
console.log(randomMessage);