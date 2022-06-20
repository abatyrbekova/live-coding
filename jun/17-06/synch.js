setTimeout(() => console.log('this is waiting list 1'))
setTimeout(() => console.log('this is waiting list 2'), 0)

setTimeout(() => console.log('this is waiting list 3 100ms'))
setTimeout(() => console.log('this is in waiting list 4 100 ms'))

function useLess() {
    console.log('this is B')

    setTimeout( () => {
        for (let i = 0; i < 1000000000; i++) {
    
        }
        console.log('this is C')
    })
    
}

useLess()
console.log('this is A') // will be executed after line #13

// asynchronous: when js has time will execute this code

// setTimeout means execute this command or function after X amount of time
// syntax: setTimeout(function , time for delaying in miliseconds)
