import { combineReducers } from "redux";
import FetchReducer from "./FetchReducer";
import QueryReducer from "./QueryReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  FetchReducer,
  QueryReducer,
  form: formReducer,
});

export default rootReducer;
