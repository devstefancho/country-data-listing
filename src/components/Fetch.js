import React, { useState } from "react";
import allActions from "../actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import TableMother from "./TableMother";

/*
 * fetch all data and store to redux
 * pass query data to TableMother.js
 */
const Fetch = ({ load, loading }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.form.search);
  //const { invalid } = useSelector((state) => state.ErrorReducer);
  var regex = new RegExp(search, "gi");

  /*console.log("invalid now?", invalid.length);*/

  useEffect(() => {
    console.log("GET ALL DATA START");
    dispatch(allActions.CountryFetchAction.fetchUser());
    console.log("GET ALL DATA DONE");
  }, [search]);

  return (
    <>
      {/*{invalid && <div>Error Message: {invalid}</div>}*/}
      load state: {load && "Now Loaded"}
      {loading && "Now Loading"}
      <div>
        <TableMother search={search} regex={regex} />
      </div>
    </>
  );
};

Fetch.propTypes = {
  load: PropTypes.bool,
  loading: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      alpha2Code: PropTypes.string,
      callingCodes: PropTypes.array,
      capital: PropTypes.string,
      region: PropTypes.string,
    })
  ),
};

export default Fetch;
