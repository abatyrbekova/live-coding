// const { myFunc, myVar } = require("./starts.js");  // type: commonjs

import {myFunc, myVar} from "./starts.js"  // type: module



myFunc(process.argv[2], process.argv[3]);

