"use client";
import dynamic from "next/dynamic";
const ApiTableContainer = dynamic(() => import("@/Components/Tables/DataTable/ApiTable"), { ssr: false });

const ApiTable = () => {
  return <ApiTableContainer />;
};

export default ApiTable;
