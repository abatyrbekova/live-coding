import http from "http";

const requestHandler = (req, res) => {   // a function that handles the client requests and sends a response
  res.write("hello from server");   // writing the response
  res.end();  // ending the response
};

const server = http.createServer(requestHandler); // creates a server

// const PORT = process.env.PORT

server.listen(5000, () => console.log("server is running on port 5000")); // runs the server on localhost:5000
