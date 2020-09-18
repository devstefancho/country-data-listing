import React, { useState, useEffect } from "react";
import Count from "./components/Count";
import Fetch from "./components/Fetch";
import { useSelector } from "react-redux";
import ContactPage from "./components/ContactPage";

export const App = () => {
  const { load, data } = useSelector((state) => state.ExampleFetchReducer);
  const contact = useSelector((state) => state.form.contact);
  const [inputVal, setInputVal] = useState("");

  //redux form value 들어갈 때, React hooks state 임시 저장용
  useEffect(updateValue, [contact]);
  function updateValue() {
    if (contact && JSON.stringify(contact.values.name)) {
      const value = JSON.stringify(contact.values.name);
      setInputVal(value);
      console.log(value);
    }
  }

  return (
    <>
      <h1>Hello World!</h1>
      <Count />
      <Fetch load={load} data={data} />
      <h1> ===== Form =====</h1>
      <ContactPage />
      <div>
        Contact name is
        {contact && JSON.stringify(contact.values.name)}
      </div>
      <div> Input Value : {inputVal}</div>
    </>
  );
};
