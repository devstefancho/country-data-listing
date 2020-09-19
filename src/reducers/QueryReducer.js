const initialState = {
  query: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUERY_BY_SEARCH":
      return { query: action.payload };
    case "QUERY_BY_SORT":
      return {
        query: action.payload.query,
        sortBy: action.payload.sortBy,
        order: action.payload.order,
      };
    case "QUERY_ADD":
      return { query: [action.payload, ...state.query] };
    default:
      return state;
  }
};

export default reducer;
