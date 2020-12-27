import { combineReducers } from "redux";
import FetchReducer from "./FetchReducer";
import QueryReducer from "./QueryReducer";
import ErrorReducer from "./ErrorReducer";
import { QUERY_ADD_SUCCESS } from "../actions/QueryAction";

import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  FetchReducer,
  QueryReducer,
  ErrorReducer,
  form: formReducer.plugin({
    submitForm: (state, action) => {
      switch (action.type) {
        case QUERY_ADD_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
  }),
});

export default rootReducer;
