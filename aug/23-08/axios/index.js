import axios from 'axios';
import 'dotenv/config'; // This takes all the variables from our .env file and writes them into process.env
// The api that I want data from
const url = "https://jsonplaceholder.typicode.com/posts"

// use environment variables
console.log("process.env.SECRET: ", process.env.SECRET);

const getPosts = async () => {
    // Use axios to GET the data and save it in a variable called response
    let response = await axios.get(url)
    console.log(response.data) // Just get the data from the response and nothing else. (like http header information)
}

// getPosts()

// console.log(process)