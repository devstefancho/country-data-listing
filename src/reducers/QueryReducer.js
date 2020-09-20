const initialState = {
  query: [],
  restquery: [],
  showquery: [], //실제 화면에 보이는 쿼리
};

const reducer = (state = initialState, action) => {
  const initialLoadArray = 20;
  switch (action.type) {
    case "QUERY_BY_SEARCH":
      return {
        query: action.payload,
        restquery: action.payload.slice(initialLoadArray),
        showquery: action.payload.slice(0, initialLoadArray),
      };
    case "QUERY_BY_SORT":
      return {
        ...state,
        query: action.payload.query,
        restquery: action.payload.query.slice(initialLoadArray),
        showquery: action.payload.query.slice(0, initialLoadArray),
        sortBy: action.payload.sortBy,
        order: action.payload.order,
      };
    case "QUERY_ADD":
      return {
        ...state,
        query: [action.payload, ...state.query],
        showquery: [action.payload, ...state.showquery],
      };
    case "QUERY_REMOVE":
      return {
        ...state,
        query: state.query.filter((v) => v.name !== action.payload),
        showquery: state.showquery.filter((v) => v.name !== action.payload),
      };
    case "QUERY_LOAD":
      return {
        ...state,
        showquery: [
          ...state.showquery,
          ...state.restquery.splice(0, action.payload),
        ],
      };
    case "QUERY_FILTERED":
      return {
        ...state,
        showquery: action.payload.slice(0, initialLoadArray),
        restquery: action.payload.slice(initialLoadArray),
      };
    default:
      return state;
  }
};

export default reducer;
