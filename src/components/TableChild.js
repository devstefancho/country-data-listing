import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const TableChild = ({ name, alpha2Code, callingCodes, capital, region }) => {
  return (
    <>
      {/*<Table striped bordered hover variant="dark">*/}
      {/*<thead>*/}
      {/*<tr>*/}
      {/*<th>NAME</th>*/}
      {/*<th>ALPHA 2 CODE</th>*/}
      {/*<th>CALLING CODES</th>*/}
      {/*<th>CAPITAL</th>*/}
      {/*<th>REGION</th>*/}
      {/*</tr>*/}
      {/*</thead>*/}
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{alpha2Code}</td>
          <td>{callingCodes}</td>
          <td>{capital}</td>
          <td>{region}</td>
        </tr>
      </tbody>
      {/*</Table>*/}
    </>
  );
};

TableChild.propTypes = {};

export default TableChild;
