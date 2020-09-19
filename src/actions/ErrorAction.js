const errorInvalidForm = (payload) => {
  return { type: "ERROR_INVALID_FORM", payload: payload };
};
export default {
  errorInvalidForm,
};
