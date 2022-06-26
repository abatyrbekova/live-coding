## [31.05](https://github.com/FbW-WD21-E11/live-coding/tree/main/may/31-05) Topics:

- Revision
- Changing the HTML content: The `Element.innerHTML` property
- onclick event
- exercise : Random password generator

---

## [01.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/01-06) Topics:

- Node and Nodelist
- The `window` object
  - User input and messages to window: `window.prompt()` and `window.alert()`
- Manipulating: Changing the DOM tree
  - Manipulating classes: `Element.classList` methods
  - Element.add()
  - Element.remove()
  - onchanged event

---

## [02.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/02-06) Topics:

- Manipulating: Changing the DOM tree
- Security risks: `document.write()` and script injection
- Creating Elements: `document.createElement(<tag name>)`
- document.createTextNode("");
- Adding elements to the page: `Element.appendChild(<Element object>)`
- Form events: `submit`, `Event.preventDefault()`

---

## [08.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/08-06) Topics:

Events:

- recap: functions that accept function values (callbacks)
- Mouse Events: `click`, `mouseenter`, `mouseleave`
- Removing event listeners:
  `EventTarget.removeEventListener(<namespace>, <function reference>)`.

  The Event Object

- Keyboard Events: `keydown`, `keyup` , `keypress`
- The event object properties: A console example
- Getting the target of the event: `Event.target`
- Form events: `submit`, `reset`, `Event.preventDefault()`
- Getting form values on submit:
  `target.elements[<id>]`, `target.elements[<name>]`, `Element.value`"

---

## [09.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/09-06) Topics:

- The Event Object revision

---

## [10.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/10-06) Topics:

Traversing: Jumping from one element to its relative

- Node vs. Element:
  Comparing `Node.previousSibling` and `Element.previousElementSibling`
- Getting an element's closest parent: `Element.closest(<selector string>)`
- Testing an element against a selector: `Element.matches(<selector string>)`
- Getting all children of an element: `ParentNode.children`
- Selecting specific children: `ParentNode.querySelector(<selector string>)`

---

## [14.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/14-06) Topics:

Propagation, Delegation

- Event bubbling concept:
  "Events bubble from innermost to outermost elements"
- Common problems with bubbling: `Event.stopPropagation()` as solution
- Event delegation solution: Delegating events from parent to child
- Reversing propagation:
  The `useCapture` option in `addEventListener()`,

---

## [15.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/15-06) Topics:

- javascript Recap
- Exercises & solutions

---

## [20.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/20-06) Topics:

Introduction: Modules for smaller files
"Module Basics

- Brief overview of IIFE and the Module pattern
- Advantages of scope isolation and encapsulation
- Using modules in the browser: `<script type=""module"" src=""..."">`
- Connecting files: The `import` and `export` keywords"
  "Imports and Exports
- Default exports vs. named exports:
- Namespacing imports:
  `import <namespace> from <path>`, `import * as <namespace> from <path>`
  "Transpiling & Bundling
- Browser compatibility and modules: Transpiling ES with Babel
- Bundling tools overview:
  Packaging our processed code with Webpack
  "Npm workflow
- Adding modules to our project: `npm install <module name>`
- Dependency List:
  reading `package.json`, `dependencies` vs. `devDependencies`
- Using 3rd party modules: `import <namespace> from <dependency name>`"

---

## [21.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/21-06) Topics:

"Non-Blocking Promises

- Blocking vs. Non-Blocking code: A brief example, `window.setTimeout()`
- Promises:
  `new Promise(<function>)`, `Promise.resolve()`, `Promise.then()`
- Promisifying: Converting `setTimeout()` to a promise
- Why use promises: callback hell
- Breaking Promises:
  `Promise.reject()`, `Promise.catch()`
  "JSON: ""JSON is JS Objects in text""
- Converting objects to JSON: `JSON.stringify(<object>)`
- Parsing JSON objects: `JSON.parse(<JSON string>)`
- JSON pitfalls: strict notation, `JSON.parse()` causes runtime errors"

---

## [22.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/22-06) Topics:

"Runtime errors

- Catching errors: `try { ... } catch (e) { ... }`
- Throwing runtime errors: `throw <expression>;`
- The error object (brief intro): `new Error(<message>);`"
  "Simplifying Asynchronous Code
- Problems with promises: scoping issues, endless chain
- Using promises modernly:
  `async` functions, `await` keyword,
  "Async functions always return a promise"

---

## [23.06](https://github.com/FbW-WD21-E11/live-coding/tree/main/jun/23-06) Topics:

"Getting data: Fetch examples

- 3rd Party APIs:
  brief introduction, why should making requests be asynchronous
- Getting info: `window.fetch(<url>)`, the response object overview
- Parsing JSON: `response.json()`
- Using data: `fetch(<url>).then(<callback>)` vs. `await fetch(<url>)`"
  "Posting data: JSONPlaceholder examples
- HTTP Methods repeat: GET vs. POST
- Sending data with Fetch: `fetch(<url>, <options>)`, the `method` option
- Parsing the body: the `body` option in fetch
- Sending forms with JS: creating a post request on submit"""
