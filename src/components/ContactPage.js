import React from "react";
import ContactForm from "../container/ExampleReduxForm";

const ContactPage = () => {
  const submit = (value) => {
    console.log(`value is ${value}`);
    console.dir(value.firstName);
  };
  return (
    <>
      <ContactForm onSubmit={submit} />
    </>
  );
};

export default ContactPage;
