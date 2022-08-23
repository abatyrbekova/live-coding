const args = process.argv.slice(2); // We get rid of the first two elements in the array.

// arr = ["sum", "1", "2", "3"];
const sumArray = (arr) => {
    let sum = 0;
    for (i = 1; i < arr.length; i++) {
        sum += Number(arr[i]); // We are adding the sum to the element which is casted to a number.
    }
    return sum;
}

// arr = ["sum", "1", "3", "2", "3"]
const checkValidArgs = (arr) => {
    for(let i = 1; i<arr.length; i++){ // i=2, arr[1]="sum"
        // if(true) { return false }
        if(isNaN(Number(arr[i]))) return false;
    }
    return true;
}

    // if (Number.isInteger(numbersArray.length/2)) is a cool way to check for evenness. 

//         0    1     2
// arr = ["1", "2", "3"] // 2
// arr2 = ["1", "2", "3", "4"] // 2.5
const getMedian = (arr) => {
    const numbersArr = arr.slice(1).map(str => Number(str)); // convert the entire array to an array of numbers
    // numbersArr = [1, 2, 3]
    numbersArr.sort((a, b) => a-b); // If the array is unsorted, we sort it. 
    if(numbersArr.length%2 === 1){ // Checking if we have an odd number of elements in the array
        return numbersArr[Math.floor(numbersArr.length/2)] // numbersArr.length = 3, numbersArr.length/2 = 1.5, Math.floor(1.5) = 1, numbersArr[1] = 2
    } else { // if we even number of elements in the array
        const midNumber1 = numbersArr[numbersArr.length/2-1]; // take the left middle index
        const midNumber2 = numbersArr[numbersArr.length/2]; // take the right middle index
        return (midNumber1 + midNumber2) / 2; // get the average of those two
    }
}

if(checkValidArgs(args) === false){
    console.log("some arguments were wrong")
} else if (args[0] === "sum") {
    console.log(sumArray(args))
} else if (args[0] === "avg") {
    console.log(sumArray(args) / (args.length - 1));  // ["sum", "1", "2", "3", "4"]
} else if (args[0] === "med") {
    console.log(getMedian(args));
} else {
    console.log("Invalid Arguments")
}