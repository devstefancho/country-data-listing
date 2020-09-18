import { combineEpics } from "redux-observable";
import { CountryFetchEpic } from "./CountryFetchEpic";

export const rootEpic = combineEpics(CountryFetchEpic);
