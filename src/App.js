import React from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "./components/InfiniteScroll";
import AppLayout from "./AppLayout";

export const App = () => {
  const { load, loading, data } = useSelector((state) => state.FetchReducer);
  const items = {
    load,
    loading,
    data,
  };

  return (
    <>
      <InfiniteScroll />
      <AppLayout {...items} />
    </>
  );
};
