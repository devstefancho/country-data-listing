const queryAction = (payload) => {
  return { type: "QUERY_BY_SEARCH", payload: payload };
};
const querySort = ({ query, sortBy, order }) => {
  return { type: "QUERY_BY_SORT", payload: { query, sortBy, order } };
};
const queryAdd = (payload) => {
  return { type: "QUERY_ADD", payload: payload };
};
const queryRemove = (country) => {
  return { type: "QUERY_REMOVE", payload: country };
};
const queryLoad = (moreload = 0) => {
  return { type: "QUERY_LOAD", payload: moreload };
};
export default {
  queryAction,
  querySort,
  queryAdd,
  queryRemove,
  queryLoad,
};
