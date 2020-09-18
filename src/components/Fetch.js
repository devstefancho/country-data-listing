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
const Fetch = ({ load, loading, data }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.form.search);
  let regex = new RegExp(search, "gi");
  const [test, setTest] = useState();

  useEffect(() => {
    console.log("GET ALL DATA START");
    dispatch(allActions.CountryFetchAction.fetchUser());
    console.log("GET ALL DATA DONE");
  }, []);

  return (
    <>
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
