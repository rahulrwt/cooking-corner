Explore this React-based application repository featuring a streamlined CI/CD pipeline powered by GitHub Actions. The automated workflows ensure code quality, while Terraform handles AWS infrastructure provisioning for seamless deployment and scalability. 
Ref https://github.com/rahulrwt/infrastructure-as-code for setting up infrastructure for the application
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

### Continuous Integration

This project use github actions for continuous integration steps for CI are as follows:
a. Checkout to main branch
b. Install Node.js and npm
c. Run Reactjs tests
d. Login to docker registry
e. Create docker image and push it to docker registry

