const initialState = {
  query: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUERY_BY_SEARCH":
      return { query: action.payload };
    default:
      return state;
  }
};

export default reducer;
