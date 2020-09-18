# react-redux-webpack-babel-boilerplate
react, webpack, babel, redux, redux-observable, redux-form

## Basic Functions

- redux : up down counter
- redux-observable : fetch data from [Here](https://jsonplaceholder.typicode.com/posts)
- redux-form : one input data and it will displayed

## File Structure
```
├── dist
│   ├── index.html
│   └── main.29ce337e0a6a7657ea58.bundle.js
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── actions
│   │   ├── ExampleAction.js
│   │   ├── ExampleFetchAction.js
│   │   └── index.js
│   ├── components
│   │   ├── ContactPage.js
│   │   ├── Count.js
│   │   └── Fetch.js
│   ├── container
│   │   └── ExampleReduxForm.js
│   ├── epics
│   │   ├── ExampleEpic.js
│   │   ├── ExampleFetchEpic.js
│   │   └── index.js
│   ├── index.js
│   └── reducers
│       ├── ExampleFetchReducer.js
│       ├── ExampleReducer.js
│       └── index.js
├── webpack.config.dev.js
└── webpack.config.prod.js
```
