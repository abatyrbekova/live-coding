# What we learned today

## Today we focused on two things: error handling and async await

## 1. Error handling in Javascript:

1.  Errors can happen for many reasons: we as developers can cause errors, the user can cause errors, the server that we request the data from can have an error.
2.  It is our duty as developers to make sure that our app does not crash if there is an error.
3.  The best way to [handle errors](./ErrorHandling/src/index.js) in Javascript is by using a `try catch` block.
4.  If an error happens anywhere in the `try` block, the execution of the function will stop and it will immediately go to the `catch` block.
5.  We have also learned that we can `throw` errors. For that, we use the [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object.
6.  By throwing a custom error, we will stop the execution of the function and have control over the message.
7.  The error that we receive in the `catch` block actually has more properties - we can get the `name`, `stack` or the `message`.

## 2. Async Await

1.  Today we learned that by just using `Promises`, we have a problem with the scope of what we resolve. Remember the pen and paper analogy - I will promise to resolve a pen, and I will ask all of you to promise me to sign a paper. After I have fulfilled my promise, after I have passed the pen to the next person, that person will have to do a bit of extra work. If that person only does what they were asked - if they only sign the paper and resolve it, the next person will not get the pen, they will only get the paper.
2.  [Async await](./AsyncAwait/src/index.js) to the rescue.
3.  By creating a function with the `async` keyword, we create a context inside which we can use the `await` keyword.
4.  So now, we can write code that looks much more similar to synchronous code. By adding the `await` keyword in front of a `Promise`, the execution of the function will stop until that `Promise` is resolved.
5.  It will also be a lot easier for us to share the values between different promises, now everyone has access to that pen!
6.  Another little thing we learned today is the `Promise.all()` method.
7.  In our example, we needed to get the `user` so that we can pass the `user.lastName` to the `getPosts` and `getGroups` functions. So, we can say that those two functions depended on the `user`.
8.  However, the `getPosts` and `getGroups` did not depend on each other, so we were able to run them in parallel with the `Promise.all()` method, instead of waiting for `getPosts` to resolve before calling `getGroups`.
