import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import allActions from "../actions";

export const CountryFetchEpic = (action$) =>
  action$.pipe(
    ofType("FETCH_USER"),
    mergeMap((data) =>
      ajax
        .getJSON(
          `https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes`
        )
        .pipe(
          map(
            (response) =>
              // 방법1
              allActions.CountryFetchAction.fetchData(response)
            // 방법 2
            //{ return {
            //payload: response,
            //type: "FETCH_DATA", }; }
          )
        )
    )
  );
