"use client";
import dynamic from "next/dynamic";
const DataSourceContainer = dynamic(() => import("@/Components/Tables/DataTable/DataSource"), { ssr: false });

const DataSources = () => {
  return <DataSourceContainer />;
};

export default DataSources;
