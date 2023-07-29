# web-Developer


Project Name: Web Developer
This is a simple web development project that consists of a login page and a home page with specific functionalities. 
The project is implemented using Node.js, Express, and JavaScript. 
The login page allows users to log in with their email and password, 
and the home page provides features like submitting text messages, searching for messages, clearing cookies, and logging out.

Copy code
npm install
Usage
Start the server: node app.js

The server will run on http://localhost:3000.

On the login page, enter the email and password from the provided JSON file to log in.
Sample Login Credentials:

yaml
Copy code
Email: sample@gmail.com
Password: 1234
After successful login, you will be redirected to the home page.

Login Page
The login page can be accessed at http://localhost:3000/login.
It requires the user to enter their email and password.
Click on the "Login" button to submit the login credentials.
The login button sends a request to the backend to validate the user's credentials against the JSON file data.
If the login is successful, the user is redirected to the home page.
If the login fails, an alert is shown with a message "Invalid email or password."



Home Page
The home page can be accessed at http://localhost:3000/.
The user can submit text messages using the input field and the "Submit" button.
The submitted messages are stored in a cookie and will persist even if the user logs in again.
The user can search for text messages using the search input field and the "Search" button.
The search results are displayed inside a container-like element on the page.
If no matching messages are found, the message "No message found." is displayed inside the container.
The user can clear all stored cookies by clicking the "Clear all" button.
The user can log out by clicking the "Logout" button, which will redirect them back to the login page.
Dependencies
The project uses the following major dependencies:

Express: A minimal and flexible Node.js web application framework.
Cookie-parser: A middleware for parsing cookies in the request object.
Body-parser: A middleware for parsing incoming request bodies in a middleware before the handlers.
Nodemon (devDependency): A utility that monitors for changes and automatically restarts the server.


Project Structure

web-developer-practical-round/
  ├── node_modules/         # Installed npm packages
  ├── app.js                # Main application file
  ├── login.html              # Login page logic
  ├── home.html               # Home page logic
  ├── package.json          # Project configuration and dependencies




