const initialState = {
  load: false,
  data: [
    {
      userId: null,
      id: null,
      title: "example title",
      body: "example body",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, load: true };
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
