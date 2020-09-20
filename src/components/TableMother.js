import React, { useState } from "react";
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
  const [regexTest, setRegexTest] = useState();
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
      setRegexTest(regex);
      dispatch(allActions.ErrorAction.errorInvalidForm(""));
    } else {
      dispatch(
        allActions.ErrorAction.errorInvalidForm("Invalid Search Character")
      );
    }
  }, [search]);

  useEffect(() => {
    const query = data.filter((v, idx) => {
      if (
        v.name.match(regexTest) ||
        v.alpha2Code.match(regexTest) ||
        v.capital.match(regexTest) ||
        v.region.match(regexTest)
      ) {
        return true;
      } else {
        const callingCodes = v.callingCodes.filter((v) => v.match(regexTest));
        if (callingCodes.length) {
          return true;
        }
      }
    });

    dispatch(allActions.QueryAction.queryAction(query));
  }, [regex]);

  //document.addEventListener("scroll", () => {
  //if (
  //window.scrollY + document.documentElement.clientHeight ===
  //document.documentElement.scrollHeight
  //) {
  //let loadMore = 5;
  //dispatch(allActions.QueryAction.queryLoad(loadMore));
  //}
  //});
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
