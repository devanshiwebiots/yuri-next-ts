import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColorsScheme } from "@/Constants";
import { ColorSchema } from "@/Data/BonusUi/Toast";

const ColorsSchemes = () => {
  const [open,setOpen] = useState(true)
  return (
    <Col md="6">
      <Card className="title-line">
        <CommonCardHeader title={ColorsScheme} subTitle={ColorSchema} />
        <CardBody className="toast-rtl">
          <Toast fade className="default-show-toast align-items-center text-light bg-warning border-0" isOpen={open}>
            <div className="d-flex justify-content-between align-items-center">
              <ToastBody>Your time over after 5 minute.</ToastBody>
              <Button className="btn-close-white me-2 m-auto" close  onClick={() => setOpen(false)}></Button>
            </div>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColorsSchemes;
