const queryAction = (payload) => {
  return { type: "QUERY_BY_SEARCH", payload: payload };
};

export default {
  queryAction,
};
