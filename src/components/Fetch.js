import React from "react";
import allActions from "../actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

const Fetch = ({ load, data }) => {
  const dispatch = useDispatch();

  const onClickFetch = () => {
    dispatch(allActions.ExampleFetchAction.fetchUser());
  };
  useEffect(() => {
    console.log("use effect in fetch");
  }, [load, data]);

  return (
    <>
      <h1>Fetch Data</h1>
      <button onClick={onClickFetch}>GET DATA</button>
      <h3>load state: {load && "state is true"}</h3>
      <p>{data.map((v) => v.title)}</p>
    </>
  );
};

Fetch.propTypes = {
  load: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};

export default Fetch;
