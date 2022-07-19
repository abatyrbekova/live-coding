# login-useContext

create a react app that has at least 3 components (in 3 different routes):

- **1 - Login**

a simple form with 2 input fields for email and password and a submit button that sends a POST request to 'https://test-api-0.herokuapp.com/login' using fetch, the body of this request must contain the user input (e.g. {email: 'example@test', password: '123456'}), in the response on successful login you will get the user object which should be saved in a context and accessible by all other components.

- **2 - Profile**

here you should display the data you get from the user object.

- **3 - My Posts**

here you should display the user's posts (also coming from the user object).

use this account for testing:
email: john@doe.com
password: 'abc123456'

and always console.log the response before saving it.

**Bonus:**

- add other components (header, footer, toggle color theme ...)
- add styling
