import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect, useDispatch, useSelector } from "react-redux";
import allActions from "../actions";

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
      <input {...input} placeholder={placeholder} type={type} />
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
        placeholder="country name"
        component={renderField}
        validate={required}
        type="text"
      />
      <Field
        name="alpha2Code"
        label="ALPHA 2 CODE"
        placeholder="alpha2 code (2 letters)"
        component={renderField}
        validate={required}
        type="text"
      />
      <Field
        name="callingCodes"
        label="CALLING CODES"
        placeholder="calling codes (numbers)"
        component={renderField}
        type="text"
      />
      <Field
        name="capital"
        label="CAPITAL"
        placeholder="capital name"
        component={renderField}
        type="text"
      />
      <Field
        name="region"
        label="REGION"
        placeholder="region name"
        component={renderField}
        type="text"
      />
      {/*<label htmlFor="name">NAME</label>*/}
      {/*<div>*/}
      {/*<br />*/}
      {/*<Field name="name" component="input" validate={required} type="text" />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*<label htmlFor="alpha2Code">ALPHA 2 CODE</label>*/}
      {/*<br />*/}
      {/*<Field name="alpha2Code" component="input" type="text" />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*<label htmlFor="callingCodes">CALLING CODES</label>*/}
      {/*<br />*/}
      {/*<Field name="callingCodes" component="input" type="text" />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*<label htmlFor="capital">CAPITAL</label>*/}
      {/*<br />*/}
      {/*<Field name="capital" component="input" type="text" />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*<label htmlFor="region">REGION</label>*/}
      {/*<br />*/}
      {/*<Field name="region" component="input" type="text" />*/}
      {/*</div>*/}
      <button type="submit" disabled={submitting} onClick={onClickSubmit}>
        Submit
      </button>
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
