import React from "react";
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
  var regex = new RegExp(search, "gi");

  useEffect(() => {
    dispatch(allActions.CountryFetchAction.fetchUser());
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
};

export default Fetch;
