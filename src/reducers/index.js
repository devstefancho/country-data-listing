import ExampleReducer from "./ExampleReducer";
import { combineReducers } from "redux";
import ExampleFetchReducer from "./ExampleFetchReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  ExampleReducer,
  ExampleFetchReducer,
  form: formReducer,
});

export default rootReducer;
