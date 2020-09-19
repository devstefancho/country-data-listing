import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import TableChild from "./TableChild";
import Table from "react-bootstrap/Table";
import allActions from "../actions";
import SortButton from "./SortButton";

const TableMother = ({ search, regex }) => {
  const { data } = useSelector((state) => state.FetchReducer);
  const { query } = useSelector((state) => state.QueryReducer);
  const [test, setTest] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect start");
    console.log(search.values.search);
    console.log(regex);
    console.log("use effect in fetch");
    //바뀐 search에 따라 regex state change
    regex = new RegExp(search.values.search, "gi");
    setTest(regex);
  }, [search]);

  useEffect(() => {
    const query = data.filter((v, idx) => {
      if (
        v.name.match(test) ||
        v.alpha2Code.match(test) ||
        v.capital.match(test) ||
        v.region.match(test)
      ) {
        return true;
      } else {
        const callingCodes = v.callingCodes.filter((v) => v.match(test));
        if (callingCodes.length) {
          return true;
        }
      }
    });

    dispatch(allActions.QueryAction.queryAction(query));
  }, [regex]);

  return (
    <>
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
          </tr>
        </thead>
        {query &&
          query.map((v, idx) => (
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
