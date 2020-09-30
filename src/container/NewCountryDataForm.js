import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";
import Button from "@material-ui/core/Button";

// validation Messages
const required = (value) => (value ? undefined : " Required");

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

let NewCountryDataForm = (props) => {
  const { handleSubmit, submitting } = props;
  const dispatch = useDispatch();
  const newData = useSelector((state) => state.form.newData);
  const { query } = useSelector((state) => state.QueryReducer);
  const onClickSubmit = () => {
    const values = newData.values;
    let exist = false;
    query.forEach((q) => {
      if (q.name === values.name) {
        exist = true;
      }
    });
    if (exist) {
      dispatch(
        allActions.ErrorAction.errorInvalidForm("Already exist country")
      );
    }
    if (!exist && values.name && values.alpha2Code) {
      dispatch(allActions.QueryAction.queryAdd(values));
      dispatch(
        allActions.ErrorAction.errorInvalidForm("valid form is submitted")
      );
    }
    if (!exist && (!values.name || !values.alpha2Code)) {
      dispatch(
        allActions.ErrorAction.errorInvalidForm("you must submit valid form")
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <Field
        name="name"
        label="NAME"
        placeholder="country"
        component={renderField}
        validate={required}
        type="text"
      />
      <Field
        name="alpha2Code"
        label="ALPHA 2 CODE"
        placeholder="alpha"
        component={renderField}
        validate={required}
        type="text"
      />
      <Field
        name="callingCodes"
        label="CALLING CODES"
        placeholder="calling"
        component={renderField}
        type="text"
      />
      <Field
        name="capital"
        label="CAPITAL"
        placeholder="capital"
        component={renderField}
        type="text"
      />
      <Field
        name="region"
        label="REGION"
        placeholder="region"
        component={renderField}
        type="text"
      />
      <div style={{ margin: 50 }}></div>
      <Button
        variant="contained"
        type="submit"
        disabled={submitting}
        onClick={onClickSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

NewCountryDataForm = reduxForm({ form: "newData" })(NewCountryDataForm);
export default NewCountryDataForm;
