import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { BasicSweetAlert } from "@/Data/BonusUi/SweetAlert";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicExamples, ClickIt } from "@/Constants";

const BasicExample = () => {
  const displayAlert = () => {
    SweetAlert.fire({ title: "Welcome! to the Yuri theme",confirmButtonColor:"#7A70BA" });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal title-line">
        <CommonCardHeader title={BasicExamples} subTitle={BasicSweetAlert} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="sweet-1" onClick={displayAlert}>{ClickIt}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicExample;
