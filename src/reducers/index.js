import { combineReducers } from "redux";
import FetchReducer from "./FetchReducer";
import QueryReducer from "./QueryReducer";
import ErrorReducer from "./ErrorReducer";

import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  FetchReducer,
  QueryReducer,
  ErrorReducer,
  form: formReducer,
});

export default rootReducer;
