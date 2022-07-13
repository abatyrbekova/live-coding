# react-router-dom

react is a single page application (all your project is served by one html page) so in order to have multiple pages (e.g. About, contacts, profile...) you can't make them as a separate html pages (the way it was done with vanilla) instead you have to use the react-router-dom library to achieve that.

## installation:

in your react app directory, in terminal, npm install react-router-dom

## implementation:

- in index.js import { BrowserRouter } from "react-router-dom and wrap your App with it.

```js
<BrowserRouter>
  <App />
</BrowserRouter>
```

- in App.js create the routes, each route should have a path (of your choosing) and an element (the component you wish to show when this path is passed to the URL)

```js
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
</Routes>
```

- add a Link, NavLink, Navigate or useNavigate to pass one path to the URL on command.

```js
 <NavLink to="/"> Home </NavLink>
 <NavLink to="/about"> About </NavLink>
```

## passing params:

you can send simple data from one 'page' (route) to another through the URL itself!

we call such data 'params' (route parameters) and they must be simple (e.g. id, username, productName...) and NON sensitive data (passwords, tokens, account keys...)

to do so, first you have to specify that a certain Route is going to accept a certain param, in the example below, we prepare the Route with the path '/user' to accept a param called 'id' by adding /:id to it

```js
<Routes>
  <Route path="/user/:id" element={<User />} />
</Routes>
```

next, you need to pass that id to the URL wherever you're using Link, NavLink, Navigate or useNavigate to route to this component, like:

```js
 <NavLink to=`/user/${id}`> User </NavLink>

```

finally, inside the 'User' component, you can extract the params 'id' from the URL using the method useParams() like this:

```js
const { id } = useParams();
```

this way you have passed an 'id' from one Route (page, component) to 'User' Route.

## passing state:

sometimes you would need to pass a more complex data from one Route to another (e.g. object, array...)
in which case you can use a property called 'state' to send these data instead of params. <br/>
you can add this 'state' property to Link, NavLink, Navigate or useNavigate like:

```js
<NavLink to="/user" state={{ data: "a lot" }}>
  User
</NavLink>
```

for useNavigate it's a bit different like:

```js
const navigate = useNavigate();
 <button onClick={()=> navigate('/user', {state: {data: 'a lot' }})} > User </button>

```

next, to receive the data once you're in 'User' component, you need to use another method from 'react-router-dom' called 'useLocation' to get access to that state you just sent, like:

```js
const location = useLocation();

const receivedObj = location.state;   // {data: 'a lot' }
```

**Note: Routes, Route, useParams, useLocation need to be imported from 'react-router-dom' first**
