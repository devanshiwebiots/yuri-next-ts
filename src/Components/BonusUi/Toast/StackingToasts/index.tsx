import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { useState } from "react";
import { Bell } from "react-feather";
import { CommonToast } from "../Common/CommonToast";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StackingToast } from "@/Constants";
import { StackingToastData, StackingToastDataList } from "@/Data/BonusUi/Toast";

const StackingToasts = () => {
  const [open, setopen] = useState(true);

  return (
    <Col md="6">
      <Card className="title-line">
        <CommonCardHeader title={StackingToast} subTitle={StackingToastData} />
        <CardBody className="toast-rtl">
          <div className="toast-container position-static">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Bell className="toast-icons toast-primary" />
                <strong className="me-auto">Yuri theme</strong>
                <small className="txt-danger">just now</small>
                <Button close className="p-0" onClick={() => setopen(false)}></Button>
              </div>
              <ToastBody className="toast-dark">Hello, I'm a web-designer.</ToastBody>
            </Toast>
            {StackingToastDataList.map((data, index) => (
              <CommonToast item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StackingToasts;
