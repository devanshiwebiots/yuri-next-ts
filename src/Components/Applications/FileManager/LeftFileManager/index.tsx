import { SideButtons } from "@/Data/FileManager";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import LeftSideFileList from "./leftSideFileList";

const LeftFileManager = () => {
  const [SideBarOpen, setSidebarOpen] = useState(false);
  const onClickHandle = () => {
    setSidebarOpen(!SideBarOpen);
  };
  return (
    <Col xl="3" className="box-col-3 pe-0">
      <div className="md-sidebar ">
        <Button color="primary" className="md-sidebar-toggle" onClick={onClickHandle}>
          File filter
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${SideBarOpen ? "open" : ""}`}>
          <div className="file-sidebar">
            <Card>
              <CardBody>
                <ul>
                  {SideButtons.map((item) => {
                    return (
                      <li key={item.id}>
                        <div className={item.className}>
                          {item.icon}
                          {item.title}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <hr />
                <LeftSideFileList />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default LeftFileManager;
