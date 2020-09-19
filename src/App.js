import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "./components/InfiniteScroll";
import AppLayout from "./AppLayout";

export const App = () => {
  const { load, loading, data } = useSelector((state) => state.FetchReducer);
  const search = useSelector((state) => state.form.search);
  const [inputVal, setInputVal] = useState("");
  const submit = (val) => {
    console.log(`submitted value is ${val}`);
    console.dir(val);
  };
  const newSubmit = (val) => {
    console.log(`submitted value is ${val}`);
    console.dir(val);
  };
  //redux form value 들어갈 때, React hooks state 임시 저장용
  useEffect(updateValue, [search]);
  function updateValue() {
    if (search && JSON.stringify(search.values.search)) {
      const value = JSON.stringify(search.values.search);
      setInputVal(value);
      console.log(value);
    }
  }
  const items = {
    submit,
    newSubmit,
    load,
    loading,
    inputVal,
    data,
  };

  return (
    <>
      <InfiniteScroll />
      <AppLayout {...items} />
    </>
  );
};
