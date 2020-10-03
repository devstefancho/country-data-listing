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
  const { invalid } = useSelector((state) => state.ErrorReducer);

  const [queryResultLength, setQueryResultLength] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      let invalid;
      //최초 한번은 useEffect가 실행되므로, 조건문 걸어서 최초진입 피해줌
      //initialValues가 없음으로 인해 search is undefined error가 발생
      if (search && search.values && search.values.search) {
        invalid = specialCharacter.some((c) =>
          search.values.search.includes(c)
        );
        if (!invalid) {
          //바뀐 search에 따라 regex state change
          regex = new RegExp(search.values ? search.values.search : /\S/, "gi");
          dispatch(allActions.ErrorAction.errorInvalidForm(""));
        } else {
          dispatch(
            allActions.ErrorAction.errorInvalidForm("Invalid Search Character")
          );
        }
      }
    } catch (err) {
      console.error("regex find error", err);
    }
  }, [search && search.values && search.values.search]);

  //debounce search state
  let debounceDelay = 500;
  const debounceSearch = useCallback(
    debounce((regex, query) => {
      try {
        if (query.length === 0) {
          return;
        }
        //filtered by search word
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
        console.log("dispatch queryfilter action -->");
        dispatch(allActions.QueryAction.queryFiltered(queryFiltered));
      } catch (error) {}
    }, debounceDelay),
    []
  );
  useEffect(() => {
    debounceSearch(regex, query);
  }, [query, search && search.values && search.values.search]);

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
  search: PropTypes.object,
  regex: PropTypes.any,
};

export default TableMother;
