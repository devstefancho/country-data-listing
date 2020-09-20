const errorInvalidForm = (message) => {
  return { type: "ERROR_INVALID_FORM", payload: message };
};
export default {
  errorInvalidForm,
};
