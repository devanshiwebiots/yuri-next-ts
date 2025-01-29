"use client";
import dynamic from "next/dynamic";
const DynamicBodyContent = dynamic(() => import("@/Components/Miscellaneous/Blog/AddPost"), {
  ssr: false,
});

const AddPost = () => {
  return <DynamicBodyContent />;
};

export default AddPost;
