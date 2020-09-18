import React, { useState, useEffect } from "react";
import Fetch from "./components/Fetch";
import { useSelector } from "react-redux";
import SearchForm from "./container/SearchForm";

export const App = () => {
  const { load, loading, data } = useSelector((state) => state.FetchReducer);
  const search = useSelector((state) => state.form.search);
  const [inputVal, setInputVal] = useState("");
  const submit = (val) => {
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

  return (
    <>
      Search Bar
      <SearchForm onSubmit={submit} />
      <div> Input Value : {inputVal}</div>
      <Fetch load={load} loading={loading} data={data} />
    </>
  );
};
