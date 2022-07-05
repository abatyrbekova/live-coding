# Component nesting

1. use create-react-app to create a new project.
2. inside App.jsx there will be JSX already written, delete it.
3. inside the src directory, create a new directory called components
4. inside the components directory, we want to create 4 new components
   1. Header
   2. Footer
   3. List
   4. ListItem

Inside App.jsx, you will import and render only the Header and the Footer component.

The header component will accept two props:

1. text
2. listItems

The footer component will accept two props :

1. text
2. listItems

In both cases, the text prop will be a string, and listItems will be an array of strings.

1. Inside the header and footer component, render the text that was passed to it
2. inside the header and footer component, import and render the List component and pass the listItems prop to it
3. Inside the List component, use the listItems that was passed as a prop, and render a ListItem for every item in the array that was passed as a prop
4. the ListItem component should accept a text prop, and render the text it was passed to it

Data:
`const headerText = "I am the header";`
`const headerItems = ["Header item one", "Header item two", "Header item three"];`
`const footerText = "I am the footer";`
`const footerItems = ["Footer item one", "Footer item two", "Footer item three"];`
