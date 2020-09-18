const fetchUser = () => {
  return { type: "FETCH_USER" };
};
const fetchData = (payload) => {
  return { type: "FETCH_DATA", payload: payload };
};

export default {
  fetchUser,
  fetchData,
};
