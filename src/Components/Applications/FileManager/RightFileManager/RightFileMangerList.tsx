import { AddNew, AllFiles, Files, Folders, ImagePath, RecentlyOpenedFiles } from "@/Constants";
import { FilesList } from "@/Data/FileManager";
import Image from "next/image";
import { useState } from "react";
import { PlusSquare, Upload } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Form, Input } from "reactstrap";
import SearchBar from "./SearchBar";

const RightFileManagerList = ({ onFileChange, onFileUpload, getFile, fileList }: any) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState(FilesList);
  return (
    <Col xl="9" md="12" className="box-col-12">
      <div className="file-content">
        <Card>
          <CardHeader>
            <div className="d-md-flex d-sm-block text-sm-center">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <div className="flex-grow-1 text-end">
                <Form className="d-inline-flex">
                  <Button color="primary me-2" onClick={getFile}>
                    <PlusSquare />
                    {AddNew}
                  </Button>
                  <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
                    <Input id="upfile" multiple type="file" onChange={(e) => onFileChange(e)} />
                  </div>
                </Form>
                <Button color="primary" tag="div" outline onClick={onFileUpload}>
                  <Upload />
                  {"Upload"}
                </Button>
              </div>
            </div>
          </CardHeader>
          {fileList.length ? (
            <CardBody className="file-manager">
              <h2>{AllFiles}</h2> <p className="f-m-light mb-2">{RecentlyOpenedFiles}</p>
              <ul className="files flex-row"> {fileList}</ul>
              <h6 className="mt-4">{Folders}</h6>
              <ul className="folder">
                {myfile.map((item) => {
                  return (
                    <li className="folder-box me-1" key={item.id}>
                      <div className="d-flex">
                        <i className={item.folderClass}></i>
                        <div className=" flex-grow-1 ms-3">
                          <h6 className="mb-0">{item.title}</h6>
                          <p>{item.folderSize}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <h6 className="mt-4">{Files}</h6>
              <ul className=" files flex-row">{fileList} </ul>
            </CardBody>
          ) : (
            <Image height={200} width={200} className="img-fluid m-auto" src={`${ImagePath}/search-not-found.png`} alt="" />
          )}
        </Card>
      </div>
    </Col>
  );
};

export default RightFileManagerList;
