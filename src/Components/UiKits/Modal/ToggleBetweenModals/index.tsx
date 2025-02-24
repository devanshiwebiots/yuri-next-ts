import { Button, Card, CardBody, Col } from "reactstrap";
import { useState } from "react";
import { OpenFirstModal, ToggleBetweenModal } from "@/Constants";
import CommonModal from "../Common/CommonModal";
import { ToggleParentModal } from "./ToggleParentModal";
import { ToggleModalList } from "@/Data/UiKits/Modal";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const ToggleBetweenModals = () => {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };

  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  return (
    <Col xl="4">
      <Card className="title-line">
        <CommonCardHeader title={ToggleBetweenModal} subTitle={ToggleModalList} />
        <CardBody className="badge-spacing">
          <Button color="dark" onClick={toggle}>{OpenFirstModal}</Button>
          <CommonModal centered isOpen={modal} toggle={toggle}>
            <ToggleParentModal nestedModal={nestedModal} closeAll={closeAll} toggle={toggle} toggleNested={toggleNested} toggleAll={toggleAll}/>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToggleBetweenModals;