import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect, useDispatch, useSelector } from "react-redux";
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
  const values = useSelector((state) => state.form.newData);
  const onClickSubmit = () => {
    if (values.values) {
      if (values.values.name && values.values.alpha2Code) {
        dispatch(allActions.QueryAction.queryAdd(values.values));
        dispatch(
          allActions.ErrorAction.errorInvalidForm("valid form is submitted")
        );
      } else {
        dispatch(
          allActions.ErrorAction.errorInvalidForm("you must submit valid form")
        );
      }
    }
    console.log("submitted ==================");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {/*<button >*/}
      {/*Submit*/}
      {/*</button>*/}
    </form>
  );
};

NewCountryDataForm = reduxForm({ form: "newData" })(NewCountryDataForm);
//## initial value가 필요한 경우
//## getFormValues는 initial과 values연결
//newCountryDataForm = connect((state) => ({
//initialValues: { search: "" },
//values: getFormValues("search")(state),
//}))(newCountryDataForm);
export default NewCountryDataForm;
