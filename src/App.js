import React, { useState, useEffect } from "react";
import Fetch from "./components/Fetch";
import { useSelector } from "react-redux";
import SearchForm from "./container/SearchForm";
import NewCountryDataForm from "./container/NewCountryDataForm";

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

  return (
    <>
      <SearchForm onSubmit={submit} />
      <NewCountryDataForm onSubmit={newSubmit} />
      <div> Input Value : {inputVal}</div>
      <Fetch load={load} loading={loading} data={data} />
    </>
  );
};
