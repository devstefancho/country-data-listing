import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";

const SortButton = ({ column }) => {
  const dispatch = useDispatch();
  const orderRef = useRef(false);
  const { query } = useSelector((state) => state.QueryReducer);

  const onClickSort = (e) => {
    orderRef.current = !orderRef.current;
    let order = orderRef.current;
    if (order) {
      order = "asc";
    } else {
      order = "des";
    }
    const columnName = e.target.id;
    const compareSortByName = (order, columnName) => {
      if (order === "asc") {
        return function (a, b) {
          let prev = a[columnName];
          let next = b[columnName];
          if (columnName === "callingCodes") {
            prev = parseInt(a.callingCodes[0]) || 0;
            next = parseInt(b.callingCodes[0]) || 0;
          }
          if (prev < next) return -1;
          if (prev > next) return 1;

          return 0;
        };
      } else if (order === "des") {
        return function (a, b) {
          let prev = a[columnName];
          let next = b[columnName];
          if (columnName === "callingCodes") {
            prev = parseInt(a.callingCodes[0]) || 0;
            next = parseInt(b.callingCodes[0]) || 0;
          }
          if (prev > next) return -1;
          if (prev < next) return 1;

          return 0;
        };
      }
    };
    //const compareSortByName = (order, columnName) => {
    //if (order === "asc") {
    //return function (a, b) {
    //if (a[columnName] < b[columnName]) {
    //return -1;
    //}
    //if (a[columnName] > b[columnName]) {
    //return 1;
    //}
    //return 0;
    //};
    //}
    //else if (order === "des") {
    //return function (a, b) {
    //if (a[columnName] > b[columnName]) {
    //return -1;
    //}
    //if (a[columnName] < b[columnName]) {
    //return 1;
    //}
    //return 0;
    //};
    //}
    //};
    const compare = compareSortByName(order, columnName);
    /* ##SORTING MORE DETAILED WAY
     if (order === "asc") {
      switch (columnName) {
        case "name":
          var compare = (a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          };
          break;
        case "alpha2Code":
          var compare = (a, b) => {
            if (a.alpha2Code < b.alpha2Code) {
              return -1;
            }
            if (a.alpha2Code > b.alpha2Code) {
              return 1;
            }
            return 0;
          };
          break;
        case "callingCodes":
          var compare = (a, b) => {
            if (a.callingCodes < b.callingCodes) {
              return -1;
            }
            if (a.callingCodes > b.callingCodes) {
              return 1;
            }
            return 0;
          };
          break;
        case "capital":
          var compare = (a, b) => {
            if (a.capital < b.capital) {
              return -1;
            }
            if (a.capital > b.capital) {
              return 1;
            }
            return 0;
          };
          break;
        case "region":
          var compare = (a, b) => {
            if (a.region < b.region) {
              return -1;
            }
            if (a.region > b.region) {
              return 1;
            }
            return 0;
          };
          break;
      }
    } else if (order === "des") {
      switch (columnName) {
        case "name":
          var compare = (a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          };
          break;
        case "alpha2Code":
          var compare = (a, b) => {
            if (a.alpha2Code > b.alpha2Code) {
              return -1;
            }
            if (a.alpha2Code < b.alpha2Code) {
              return 1;
            }
            return 0;
          };
          break;
        case "callingCodes":
          var compare = (a, b) => {
            if (a.callingCodes > b.callingCodes) {
              return -1;
            }
            if (a.callingCodes < b.callingCodes) {
              return 1;
            }
            return 0;
          };
          break;
        case "capital":
          var compare = (a, b) => {
            if (a.capital > b.capital) {
              return -1;
            }
            if (a.capital < b.capital) {
              return 1;
            }
            return 0;
          };
          break;
        case "region":
          var compare = (a, b) => {
            if (a.region > b.region) {
              return -1;
            }
            if (a.region < b.region) {
              return 1;
            }
            return 0;
          };
          break;
      }
    }
  */
    const queryCopy = query.slice();
    const querySort = queryCopy.sort(compare);

    const payload = {
      query: querySort,
      sortBy: columnName,
      order: order,
    };
    dispatch(allActions.QueryAction.querySort(payload));
  };
  return (
    <>
      <span
        id={column}
        style={{ float: "right", cursor: "pointer" }}
        onClick={onClickSort}
      >
        {/*아래 symbol은 정렬우선순위 때문에 더 고민해야됨*/}
        {/*{orderRef.current ? "\u25B2" : "\u25BC"}*/}
        {"\u21C5"}
      </span>
    </>
  );
};

SortButton.propTypes = {
  column: PropTypes.string,
};
export default SortButton;
