import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import TableChild from "./TableChild";
import Table from "react-bootstrap/Table";
import allActions from "../actions";
import SortButton from "./SortButton";
import debounce from "lodash/debounce";

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

  useEffect(() => {
    //console.log("useEffect start");
    //console.log(
    //`value is ${search.values.search} type is ${typeof search.values.search}`
    //);
    //console.log("use effect in fetch");
    let invalid = specialCharacter.some((c) =>
      search.values.search.includes(c)
    );
    //console.log("invalid character", invalid);

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
      console.log("====query===filter====", query);

      const queryFiltered = query.filter((v, idx) => {
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
      console.log("regex changed", regex);
      dispatch(allActions.QueryAction.queryFiltered(queryFiltered));
    } catch (error) {
      console.log("error====", error);
    }
  }, [search && search.values && search.values.search]);

  useEffect(() => {
    //when fetching data is updated, set query as new data
    dispatch(allActions.QueryAction.queryAction(data));
  }, [data]);

  return (
    <>
      {invalid && <div>Message: {invalid}</div>}
      <h2>Result Query Data</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {/* UP &#x25B2;     DOWN  &#x25BC;*/}
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
