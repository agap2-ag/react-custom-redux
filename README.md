# Custom Redux
This is a redux implementation using as an example a side-by-side chat where 3 hypothetical users interact.

The [Redux package](https://redux.js.org/) was added but it is not used by default. However, it can be switched on in order to use its functions instead.

## Deployed online version

A live/deployed GitHub version of this project can be tried on this [Custom Redux Demo](https://agap2-ag.github.io/react-custom-redux).

### Usage

Type on any of the 3 input and press <kbd>Enter</kbd> (or click the button) to send the typed text and user details to the stored messages.

The messages state (placed on the Redux store) can be inspected at the top of the page.

## Styling

[Semantic Ui](https://semantic-ui.com/) is being used and no style files were added, however SASS packages were added to the project for further customization.

## Available Scripts

In the project directory, you can run:

### `yarn lint`

Analyses HTML, SCSS and JS code for potential programming and stylistic errors.

[Javascript Standard Style](https://standardjs.com/) is being used for linting.

### `yarn deploy` or `yarn deploy:win`

Deploys a build version of the repository to GitHub (cleaning the build folder first).

### Default CRA scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (CRA) with the scripts below available:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

