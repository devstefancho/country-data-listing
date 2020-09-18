import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <Field name="name" component="input" type="text" />
      </div>
    </form>
  );
};

ContactForm = reduxForm({ form: "contact" })(ContactForm);
//initial value가 필요한 경우
//getFormValues는 initial과 values연결
ContactForm = connect((state) => ({
  initialValues: { name: "your name" },
  values: getFormValues("contact")(state),
}))(ContactForm);
export default ContactForm;
