# typescript-webpack-template

- A simple template for writing applications in [Typescript](https://github.com/Microsoft/TypeScript).
- Uses [Webpack](https://github.com/webpack) for module bundling.
- Uses [Jest](https://github.com/facebook/jest) for unittests.

# pre-reqs

To build and run this project you need to:
- Install [Node.js](https://nodejs.org/en/)

# getting-started
- Clone this repository
```
git clone git@github.com:addelajnen/typescript-webpack-template.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm run build:dev
node "dist/__APP__.bundle.js"
```

# other build options

To build in production mode, run:
```
npm run build:prod
```

To run tests, run:
```
npm run test
```

# output

The default projectname described in "package.json" and webpack configuration is "\_\_APP\_\_". 
To change this you need to replace all occurences of "\_\_APP\_\_" to your own projectname in the following files:
- package.json
- scripts/webpack/webpack.config.ts
