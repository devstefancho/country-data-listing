const initialState = {
  invalid: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ERROR_INVALID_FORM":
      return { invalid: action.payload };
    default:
      return state;
  }
};

export default reducer;
