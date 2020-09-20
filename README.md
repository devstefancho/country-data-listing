# react-redux-webpack-babel-boilerplate
react, webpack, babel, redux, redux-observable, redux-form

[Here is boilerplate](https://github.com/devstefancho/react-redux-webpack-babel-boilerplate) for this project (I made this as well)

## Getting Started

To install all dependecies, do `npm install` in root directory

- `npm start` will run this application in localhost:8080
- `npm run build` will build html and js file from webpack
- `dist/index.html` is production file


## Basic Functions

- redux : up down counter
- redux-observable : fetch data from [Here](https://jsonplaceholder.typicode.com/posts)
- redux-form : one input data and it will displayed

## File Structure
```
├── README.md
├── dist
│   ├── index.html
│   ├── main.0b1aa8ec6158add6125a.bundle.js
│   ├── main.1c793c4e6183a8005877.bundle.js
│   ├── main.1e47a915f953848c7473.bundle.js
│   ├── main.20e96e0d8b2fc9dafbef.bundle.js
│   ├── main.29ce337e0a6a7657ea58.bundle.js
│   ├── main.2ff51b91d1d8e708a986.bundle.js
│   ├── main.5aff3025a2f4bcc11bf4.bundle.js
│   ├── main.9518e916a3893aa42dc2.bundle.js
│   ├── main.d2433e8951c54a44f9e7.bundle.js
│   └── main.fc26979807766ea37a38.bundle.js
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── AppLayout.js
│   ├── actions
│   │   ├── CountryFetchAction.js
│   │   ├── ErrorAction.js
│   │   ├── QueryAction.js
│   │   └── index.js
│   ├── components
│   │   ├── Fetch.js
│   │   ├── InfiniteScroll.js
│   │   ├── SortButton.js
│   │   ├── TableChild.js
│   │   └── TableMother.js
│   ├── container
│   │   ├── NewCountryDataForm.js
│   │   └── SearchForm.js
│   ├── epics
│   │   ├── CountryFetchEpic.js
│   │   └── index.js
│   ├── index.js
│   └── reducers
│       ├── ErrorReducer.js
│       ├── FetchReducer.js
│       ├── QueryReducer.js
│       └── index.js
├── webpack.config.dev.js
└── webpack.config.prod.js
```

