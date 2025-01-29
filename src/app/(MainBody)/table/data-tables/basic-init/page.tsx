"use client";
import dynamic from "next/dynamic";
const BasicInitContainer = dynamic(() => import("@/Components/Tables/DataTable/BasicInit"), { ssr: false });

const BasicInIntTable = () => {
  return <BasicInitContainer />;
};

export default BasicInIntTable;
