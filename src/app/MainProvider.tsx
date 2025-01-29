"use client";
import { store } from "@/ReduxToolkit/Store";
import React from "react";
import { Provider } from "react-redux";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default MainProvider;
