"use client";
import dynamic from "next/dynamic";
const DynamicBodyContent = dynamic(() => import("@/Components/Miscellaneous/Maps/LeafletMap"), {
  ssr: false,
});

const LeafletMaps = () => {
  return <DynamicBodyContent />;
};

export default LeafletMaps;
