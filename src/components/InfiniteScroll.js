import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../actions";

const InfiniteScroll = () => {
  const dispatch = useDispatch();

  document.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const margin = 0.2; //margin is percentage of clientHeight
    if (currentScrollY + clientHeight * (1 + margin) >= scrollHeight) {
      let loadMore = 5;
      dispatch(allActions.QueryAction.queryLoad(loadMore));
    }
  });

  return <></>;
};

export default InfiniteScroll;
