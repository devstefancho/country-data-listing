import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={placeholder}
        style={{ maxWidth: "100%" }}
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
let SearchForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(() => {})}>
      <div>&#x1F50D;</div>
      <Field
        name="search"
        label="SEARCH"
        placeholder="search..."
        component={renderField}
        type="text"
      />
    </form>
  );
};

SearchForm = reduxForm({ form: "search" })(SearchForm);
//## initial value가 필요한 경우
//## getFormValues는 initial과 values연결
SearchForm = connect((state) => ({
  initialValues: { search: "" },
  values: getFormValues("search")(state),
}))(SearchForm);
export default SearchForm;
