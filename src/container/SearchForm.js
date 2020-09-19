import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";

let SearchForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="search">SEARCH</label>
        <br />
        <Field name="search" component="input" type="text" />
      </div>
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
