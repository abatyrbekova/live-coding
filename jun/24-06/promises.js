/**
 * Promises are Objects basically
 * 
 * syntax
 * 
 * const promise = new Promise((resolve, reject) => {})
 */

const somePromise = new Promise((naglaa, reject) => {
    console.log('Promise')

    // if (there are some results from DB) send them back

    const a = 2 + 2

    try {
        // add some code to get some data from somewhere
        if (a > 3) {

            naglaa()
        } 
    } catch (error) {
        // if there is some error then execute this callback function
        reject()
    }

})

// somePromise()
somePromise
.then(() => console.log(1)) // resolve part will be executed
.catch(() => {console.log('error')}) // reject will be executed

console.log('A')

// class SOmeClass {
//     constructor(someFunction) {
//         console.log('this is an instance of this class')
//         someFunction()
//     }
// }

// const object = new SOmeClass(() => console.log('function in createing this instance'))
