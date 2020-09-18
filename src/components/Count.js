import React from "react";
import allActions from "../actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.ExampleReducer);

  const onClickUp = () => {
    dispatch(allActions.ExampleAction.increment());
  };
  const onClickDown = () => {
    console.log("click down");

    dispatch(allActions.ExampleAction.decrement());
  };
  useEffect(() => {
    console.log("use effect");
  }, [counter]);

  return (
    <>
      <button onClick={onClickUp}>UP</button>
      <h2>Counter : {counter}</h2>
      <button onClick={onClickDown}>DOWN</button>
    </>
  );
};

export default Count;
