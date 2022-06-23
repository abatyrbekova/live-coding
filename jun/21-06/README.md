# What we learned today

Today is all about asynchronous Javascript!

1. Javascript is a synchronous, single threaded language, not an asynchronous language. So what does that mean?
   It means that the Javascript parser will go line by line from top of the file to the bottom.

2. How are we then able to write asynchronous code in Javascript? We are able to write asynchronous Javascript because
   the lovely people who work on browser engines (V8 in Chrome, for example), exposed functions to us which enable us to write asynchronous code.

3. But why do we need asynchronous operations? Because we don't want the user to look at a blank screen while we are waiting for an API response. Think of the waiter at a restaurant analogy. The waiter will not wait for the chef to prepare the meal, the waiter can do other things (clean tables, serve other customers) while they are waiting for the food to be prepared.

4. OK, but how do I write asynchronous Javascript? Back in the days, before having [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), we would pass callbacks. [Callbacks](./Promises/src/callbacks.js) quickly ended up becoming very hard to read, and it lead to what we call `callback hell`.

5. Instead of nesting callbacks inside callbacks, the same lovely team came up with `Promises`. Promises enabled us to, instead of nesting callbacks, chain functions. We have learnt that promises have 3 different states:

   1. pending - the state before our promise is resolved or rejected
   2. resolved - once our promise successfully fulfills what it promised to do
   3. rejected - in case our promise was not able to fullfill it's promise

   Example for rejection: We make an API call, and the server we are calling is down because there was a power outage where the server is located. We are not able to get the data, therefore we have to reject the promise.

6. Another topic we visited today is [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) - Javascript Object Notation. It is a lightweight format used for storing and transforming data.

7. When we make a request to the server to get the data, the data will be sent to us as a JSON string. Since JSON is a string, and not an object, we will have to convert the JSON into a Javascript value.

8. We do so by using a method JSON.parse(). We can also convert a Javascript value to a JSON string by calling the JSON.stringify(). Check examples in the [JSON](./JSON/index.js) directory.
