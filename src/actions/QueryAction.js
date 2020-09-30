export const QUERY_BY_SEARCH = "QUERY_BY_SEARCH";
export const QUERY_BY_SORT = "QUERY_BY_SORT";
export const QUERY_ADD = "QUERY_ADD";
export const QUERY_REMOVE = "QUERY_REMOVE";
export const QUERY_LOAD = "QUERY_LOAD";
export const QUERY_FILTERED = "QUERY_FILTERED";
export const QUERY_ADD_SUCCESS = "QUERY_ADD_SUCCESS";

const queryAction = (payload) => {
  return { type: QUERY_BY_SEARCH, payload: payload };
};
const querySort = ({ query, sortBy, order }) => {
  return { type: QUERY_BY_SORT, payload: { query, sortBy, order } };
};
const queryAdd = (payload) => {
  return { type: QUERY_ADD, payload: payload };
};
const queryRemove = (country) => {
  return { type: QUERY_REMOVE, payload: country };
};
const queryLoad = (moreload = 0) => {
  return { type: QUERY_LOAD, payload: moreload };
};
const queryFiltered = (queryfiltered) => {
  return { type: QUERY_FILTERED, payload: queryfiltered };
};
const queryAddSuccess = (payload) => {
  return { type: QUERY_ADD_SUCCESS, payload: payload };
};
export default {
  queryAction,
  querySort,
  queryAdd,
  queryRemove,
  queryLoad,
  queryFiltered,
  queryAddSuccess,
};
