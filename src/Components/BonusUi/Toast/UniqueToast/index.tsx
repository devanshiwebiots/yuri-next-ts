import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImNotSure, ImagePath, RemoveMyAccount, UniqueToasts, YourAccountWillBePermanentlyDeleted } from "@/Constants";
import { UniqueToastData } from "@/Data/BonusUi/Toast";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";

const UniqueToast = () => {
  const [open, setOpen] = useState(true);
  
  return (
    <Col md="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={UniqueToasts} subTitle={UniqueToastData} />
        <CardBody className="toast-rtl">
          <Toast fade isOpen={open}>
            <div className="toast-header toast-img">
              <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/avtar/1.jpg`} alt="profile" />
              <strong className="me-auto">Yuri theme</strong>
              <Button close className="p-0" onClick={() => setOpen(false)}></Button>
            </div>
            <ToastBody className="toast-dark">
              <h6 className="mb-2">{YourAccountWillBePermanentlyDeleted}</h6>
              <p className="mb-0">Do you intend to continue?</p>
              <div className="mt-2 pt-2 border-top d-flex gap-2">
                <Button color="dark" size="sm">{ImNotSure}</Button>
                <Button color="danger" size="sm" onClick={() => setOpen(false)}>{RemoveMyAccount}</Button>
              </div>
            </ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UniqueToast;
