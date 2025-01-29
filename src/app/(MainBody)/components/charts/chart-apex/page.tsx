"use client";
import dynamic from "next/dynamic";
const DynamicBodyContent = dynamic(() => import("@/Components/Charts/ApexChart"), {
  ssr: false,
});

const ApexCharts = () => {
  return <DynamicBodyContent />;
};

export default ApexCharts;
