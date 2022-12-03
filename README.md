# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
### React-router-dom

The react-router-dom package contains bindings for using React Router in web applications. Please follow the following steps to install the package and adding routes in your React Project.

**Open up your terminal add:**
```sh
npm install react-router-dom
```
**Adding a Router:**

First thing to do is create a [Browser Router][createbrowserrouter] and configure our first route. This will enable client side routing for our web app.

The `main.jsx` file is the entry point. Open it up and we'll put React Router on the page.

**Create and render a [browser router][createbrowserrouter] in `main.jsx`**

```jsx lines=[3-7,10-15,19] filename=src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

This first route is what we often call the "root route" since the rest of our routes will render inside of it. It will serve as the root layout of the UI, we'll have nested layouts as we get farther along.

### About my project
**To start developing the project:**
- In order to install all project depedencies:
```sh
npm install
```

- To start development server with:
```sh
npm start
```

- You can see the project in live using in the browser:
```sh
http://localhost:3000/
```
**Functionalities:**
#### Home Page
- [x] We can sorted the books into the categories: Currently Reading, Want to Read and Read.
- [x] There is a button in the bottom part of the book where you can change between shelves. 
- [x] In the footer of the page you have a button to navigate to Search Page.
- [x] If you want to see more information about the book, just click on "books details".
- [x] If there are no books on the shelf, a message will appear stating that "There are no books on this shelf".

#### Search page
- [x] You can search the book by the name of the book.
- [x] When you start typing, a list of books with the letters you're looking for will start to appear.
- [x] If there is no book available with the name you are looking for, you will see a empty page.

**Live page**
[My Reads](https://www.myreads-udacity.netlify.app)

**Screenshots**
![image 1](/src/screenshots/screenshot.png)
![image 2](/src/screenshots/screenshot2.png)
![image 3](/src/screenshots/screenshot3.png)
![image 4](/src/screenshots/screenshot4.png)
![image 5](/src/screenshots/screenshot5.png)
![image 6](/src/screenshots/screenshot6.png)
![image 7](/src/screenshots/screenshot7.png)


