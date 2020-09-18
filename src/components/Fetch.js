import React, { useState } from "react";
import allActions from "../actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

const Fetch = ({ load, loading, data }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.form.search);
  let regex = new RegExp(search, "gi");
  const [test, setTest] = useState();

  useEffect(() => {
    console.log("useEffect start");
    console.log(search.values.search);
    console.log(regex);
    console.log("use effect in fetch");

    regex = new RegExp(search.values.search, "gi");
    setTest(regex);
  }, [search]);

  useEffect(() => {
    console.log("GET ALL DATA START");
    dispatch(allActions.CountryFetchAction.fetchUser());
    console.log("GET ALL DATA DONE");
  }, []);

  return (
    <>
      <h1>Fetch Data</h1>
      <h3>
        load state: {load && "Now Loaded"}
        {loading && "Now Loading"}
      </h3>
      <h1>====== RESULT DATA ======</h1>
      <div>
        {data.map((v, idx) => {
          if (
            v.name.match(test) ||
            v.alpha2Code.match(test) ||
            v.capital.match(test) ||
            v.region.match(test)
          ) {
            return <div key={idx}>{v.name}</div>;
          } else {
            const callingCodes = v.callingCodes.filter((v) => v.match(test));
            if (callingCodes.length) {
              return <div key={idx}>{v.name}</div>;
            }
          }
        })}
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
