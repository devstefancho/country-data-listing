import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import allActions from "../actions";

const TableChild = ({ name, alpha2Code, callingCodes, capital, region }) => {
  const nameRef = useRef("");
  const dispatch = useDispatch();
  const onClickRemove = (e) => {
    dispatch(allActions.QueryAction.queryRemove(nameRef.current.innerHTML));
  };
  return (
    <>
      <tbody>
        <tr>
          <td ref={nameRef}>{name}</td>
          <td>{alpha2Code}</td>
          <td>{callingCodes.join(", ")}</td>
          <td>{capital}</td>
          <td>{region}</td>
          <td style={{ textAlign: "center" }} onClick={onClickRemove}>
            <i className="fa fa-trash-o"></i>
          </td>
        </tr>
      </tbody>
    </>
  );
};

TableChild.propTypes = {
  name: PropTypes.string,
  alpha2Code: PropTypes.string,
  callingCodes: PropTypes.array,
  capital: PropTypes.string,
  region: PropTypes.string,
};

export default TableChild;
