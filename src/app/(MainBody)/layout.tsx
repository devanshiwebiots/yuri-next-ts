"use client";
import FooterLayout from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Sidebar from "@/Layout/Sidebar";
import Taptop from "@/Layout/TapTop";
import ThemeCustomizer from "@/Layout/ThemeCustomizer";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const { sidebar_types } = useAppSelector((store) => store.themeCustomizer);
  return (
    <>
      <Taptop />
      <div className={`page-wrapper ${sidebar_types}`} id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body">{children}</div>
          <FooterLayout />
        </div>
      </div>
      <ThemeCustomizer />
    </>
  );
};

export default Layout;
