// ES6 Import
import {logger, findOldestUserInArray} from "./util.mjs";

const users = [
    {name: "niels", id: 0, age: 30}, 
    {name: "max", id: 1, age: 55},
    {name: "mona", id: 2, age: 53}
]

console.log(findOldestUserInArray(users))
