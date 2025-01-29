import { Button, Card, CardBody, Col } from "reactstrap";
import { useState } from "react";
import { CenteredModals, Close, ImagePath, SomethingWentWrong, VerticallyCentered } from "@/Constants";
import CommonModal from "./Common/CommonModal";
import Image from "next/image";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CenteredModalList } from "@/Data/UiKits/Modal";

const CenteredModal = () => {
  const [centerd, setCentered] = useState(false);
  const centeredToggle = () => setCentered(!centerd);
  
  return (
      <Col xl="4">
        <Card className="title-line">
          <CommonCardHeader title={CenteredModals} subTitle={CenteredModalList} />
          <CardBody className="badge-spacing">
          <Button color="success" onClick={centeredToggle}>{VerticallyCentered}</Button>
            <CommonModal centered isOpen={centerd} toggle={centeredToggle}>
              <div className="modal-toggle-wrapper">
                <ul className="modal-img">
                  <li className="text-center"><Image width={100} height={100} src={`${ImagePath}/gif/danger.gif`} alt="error" /></li>
                </ul>
                <h4 className="text-center pb-2">{SomethingWentWrong}</h4>
                <p className="text-center">Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.</p>
                <Button color="secondary" className="d-flex m-auto" onClick={centeredToggle}>{Close}</Button>
              </div>
            </CommonModal>
          </CardBody>
        </Card>
      </Col>
  );
};

export default CenteredModal;
