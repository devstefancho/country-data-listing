import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import allActions from "../actions";

export const ExampleFetchEpic = (action$) =>
  action$.pipe(
    ofType("FETCH_USER"),
    mergeMap((data) =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`).pipe(
        map(
          (response) =>
            // 방법1
            allActions.ExampleFetchAction.fetchData(response)
          // 방법 2
          //{ return {
          //payload: response,
          //type: "FETCH_DATA", }; }
        )
      )
    )
  );
