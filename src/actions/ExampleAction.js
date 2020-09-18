const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
const incrementNum = (number) => {
  return {
    type: "INCREMENT_NUM",
    payload: number,
  };
};

const decrementNum = (number) => {
  return {
    type: "DECREMENT_NUM",
    payload: number,
  };
};

export default {
  increment,
  decrement,
  incrementNum,
  decrementNum,
};
