import React, { useRef } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import allActions from "../actions";

const TableChild = ({ name, alpha2Code, callingCodes, capital, region }) => {
  const nameRef = useRef("");
  const dispatch = useDispatch();
  const onClickRemove = (e) => {
    console.log(
      `this country data will be removed : ${nameRef.current.innerHTML}`
    );
    dispatch(allActions.QueryAction.queryRemove(nameRef.current.innerHTML));
  };
  return (
    <>
      <tbody>
        <tr>
          <td ref={nameRef}>{name}</td>
          <td>{alpha2Code}</td>
          <td>{callingCodes}</td>
          <td>{capital}</td>
          <td>{region}</td>
          <td style={{ textAlign: "center" }} onClick={onClickRemove}>
            <i className="fa fa-trash-o"></i>
          </td>
        </tr>
      </tbody>
      {/*</Table>*/}
    </>
  );
};

TableChild.propTypes = {};

export default TableChild;
