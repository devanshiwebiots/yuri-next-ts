// @ts-nocheck
import { FilesList } from "@/Data/FileManager";
import { useState } from "react";
import { toast } from "react-toastify";
import RightFileManagerList from "./RightFileMangerList";

const RightFileManager = () => {
  const [myFile, setMyFile] = useState(FilesList);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const fileList = myFile
    .filter((data) => {
      if (searchTerm == null) return data;
      else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return data;
      }
    })
    .map((data, i) => {
      return (
        <li className="file-box me-1" key={i}>
          <div className="file-top">
            <i className={data.icon}></i>
            <i className="fa fa-ellipsis-v f-14 ellips"></i>
          </div>
          <div className="file-bottom">
            <h6>{data.name}</h6>
            <p className="mb-1">{data.size}</p>
            <p>
              <b>{'last open : '}</b> {data.modify}
            </p>
          </div>
        </li>
      );
    });
  const getFile = () => {
    document.getElementById("upfile").click();
  };
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    let myFiles = [...myFile];
    if (selectedFile !== null) {
      myFiles.push({
        id: myFile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModifiedDate}`,
        icon: "fa fa-file-text-o txt-info",
        folderClass: "",
        title: "",
        folderSize: "",
      });
      setMyFile(myFiles);
      toast.success("File Upload Successfully !");
    } else {
      toast.error("Please Select at least one file !");
    }
  };
  return <RightFileManagerList fileList={fileList} getFile={getFile} onFileChange={onFileChange} onFileUpload={onFileUpload} />;
};
export default RightFileManager;
