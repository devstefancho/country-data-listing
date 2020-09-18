const initialState = {
  load: false,
  loading: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, load: false, loading: true };
    case "FETCH_DATA":
      return {
        ...state,
        load: true,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
