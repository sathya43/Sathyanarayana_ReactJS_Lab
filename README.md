Steps to run the server:

The expense tracker react app requires information from a json server running on port 3000. I have added the fake server project here. It is present in the folder
fake_server. This fake server should be started before starting the expense tracker app. Follow the below steps to run the expense tracker succesfully.

Step 1: Download the Code as Zip and Unzip the folder

Step 2: Navigate inside the folder where src, fake_server are present

Step 3: Navigate inside fake_server folder

     Run following commands in terminal

      3. a : npm install

      3. b : npm start

      This ensures to run a json server that performs CRUD operations on end point
      http://localhost:3001/items

      This is prerequesite to be run for expense tracker application

Step 4: Navigate to folder where src is present

      Run following commands in terminal

      4. a : npm install

      4. b : npm start

      Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
