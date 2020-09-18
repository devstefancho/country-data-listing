import { combineReducers } from "redux";
import FetchReducer from "./FetchReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  FetchReducer,
  form: formReducer,
});

export default rootReducer;
