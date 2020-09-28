import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import TableChild from "./TableChild";
import Table from "react-bootstrap/Table";
import allActions from "../actions";
import SortButton from "./SortButton";

const specialCharacter = [
  "\\",
  "^",
  "$",
  "|",
  "?",
  "*",
  "+",
  "[",
  "]",
  "(",
  ")",
  "{",
  "}",
];
const TableMother = ({ search, regex }) => {
  const { data } = useSelector((state) => state.FetchReducer);
  const { query, showquery } = useSelector((state) => state.QueryReducer);
  const dispatch = useDispatch();
  const { invalid } = useSelector((state) => state.ErrorReducer);
  const [queryResultLength, setQueryResultLength] = useState();

  useEffect(() => {
    let invalid = specialCharacter.some((c) =>
      search.values.search.includes(c)
    );

    if (!invalid) {
      //바뀐 search에 따라 regex state change
      regex = new RegExp(search.values.search, "gi");
      dispatch(allActions.ErrorAction.errorInvalidForm(""));
    } else {
      dispatch(
        allActions.ErrorAction.errorInvalidForm("Invalid Search Character")
      );
    }
  }, [search]);

  //filtered by search word
  useEffect(() => {
    try {
      const queryFiltered = query.filter((v) => {
        if (
          v.name.match(regex) ||
          v.alpha2Code.match(regex) ||
          (v.capital && v.capital.match(regex)) ||
          (v.region && v.region.match(regex))
        ) {
          return true;
        } else {
          if (v.callingCodes) {
            const callingCodes = v.callingCodes.filter((v) => v.match(regex));
            if (callingCodes.length) {
              return true;
            }
          }
        }
      });
      setQueryResultLength(queryFiltered.length);
      dispatch(allActions.QueryAction.queryFiltered(queryFiltered));
    } catch (error) {}
  }, [search && search.values && search.values.search]);

  useEffect(() => {
    //when fetching data is updated, set query as new data
    dispatch(allActions.QueryAction.queryAction(data));
  }, [data]);

  return (
    <>
      {invalid && <div>Message: {invalid}</div>}
      <h2>
        Result Query Data{" "}
        {(query.length && queryResultLength) || "<Qty of Data>"}
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>
              NAME
              <SortButton column="name" style={{}} />
            </th>
            <th>
              ALPHA 2 CODE
              <SortButton column="alpha2Code" />
            </th>
            <th>
              CALLING CODES
              <SortButton column="callingCodes" />
            </th>
            <th>
              CAPITAL
              <SortButton column="capital" />
            </th>
            <th>
              REGION
              <SortButton column="region" />
            </th>
            <th>REMOVE</th>
          </tr>
        </thead>
        {query &&
          showquery &&
          showquery.map((v, idx) => (
            <TableChild
              key={idx}
              name={v.name}
              alpha2Code={v.alpha2Code}
              callingCodes={v.callingCodes}
              capital={v.capital}
              region={v.region}
            />
          ))}
      </Table>
    </>
  );
};

TableMother.propTypes = {
  search: PropTypes.string.isRequired,
  regex: PropTypes.any,
};

export default TableMother;
