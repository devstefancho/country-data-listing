import { combineEpics } from "redux-observable";
import { ExampleEpic } from "./ExampleEpic";
import { ExampleFetchEpic } from "./ExampleFetchEpic";

export const rootEpic = combineEpics(ExampleEpic, ExampleFetchEpic);
