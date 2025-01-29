import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { Disc } from "react-feather";
import { CommonToast } from "../Common/CommonToast";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TranslucentToast } from "@/Constants";
import { TranslucentToastData, TranslucentToastDataList } from "@/Data/BonusUi/Toast";

const TranslucentToasts = () => {
  const [open, setOpen] = useState(true);

  return (
    <Col md="6">
      <Card className="overflow-hidden title-line">
        <CommonCardHeader title={TranslucentToast} subTitle={TranslucentToastData} />
        <CardBody className="toast-rtl">
          <div className="toast-container">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Disc className="toast-icons toast-info" />
                <strong className="me-auto">Yuri theme</strong>
                <small className="text-muted d-sm-block d-none">11 mins ago</small>
                <Button close className="p-0" onClick={() => setOpen(false)}></Button>
              </div>
              <ToastBody className="toast-dark"> Hello, I'm a web-designer.</ToastBody>
            </Toast>
            {TranslucentToastDataList.map((data, index) => (
              <CommonToast item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TranslucentToasts;
