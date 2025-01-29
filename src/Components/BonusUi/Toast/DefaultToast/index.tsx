import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultToasts, ImagePath } from "@/Constants";
import { DefaultToastData } from "@/Data/BonusUi/Toast";
import Image from "next/image";

const DefaultToast = () => {
  const [open, setOpen] = useState(true);

  return (
    <Col md="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={DefaultToasts} subTitle={DefaultToastData} />
        <CardBody className="toast-rtl">
          <Toast className="default-show-toast" isOpen={open}>
            <div className="toast-header toast-img">
              <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/avtar/1.jpg`} alt="profile" />
              <strong className="me-auto">Yuri theme</strong>
              <small className="d-sm-block d-none">10 min ago</small>
              <Button close className="p-0" onClick={() => setOpen(false)}></Button>
            </div>
            <ToastBody className="toast-dark"><strong className="txt-success">Well done!</strong> You successfully read this important message.</ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultToast;
