const queryAction = (payload) => {
  return { type: "QUERY_BY_SEARCH", payload: payload };
};
const querySort = ({ query, sortBy, order }) => {
  return { type: "QUERY_BY_SORT", payload: { query, sortBy, order } };
};

export default {
  queryAction,
  querySort,
};
