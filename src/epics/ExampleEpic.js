import { filter, mapTo, delay } from "rxjs/operators";
import { ofType } from "redux-observable";

export const ExampleEpic = (action$) =>
  action$.pipe(
    //filter((action) => action.type === "INCREMENT"),
    ofType("INCREMENT"),
    delay(300),
    mapTo({ type: "DECREMENT" })
  );
