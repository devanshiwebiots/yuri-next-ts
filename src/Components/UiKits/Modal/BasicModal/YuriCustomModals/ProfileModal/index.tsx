import { useState } from "react";
import { Button, Col } from "reactstrap";
import Image from "next/image";
import { ClickOut, ImagePath } from "@/Constants";
import { ProfileModal } from "./ProfileModal";
import { CommonYuriModalTitle } from "../Common/CommonYuriModalTitle";

export const ModalOne = () => {
  const [modalOne, setModalOne] = useState(false);
  const modalOneTogggle = () => setModalOne(!modalOne);

  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Yuri-demo-img">
          <CommonYuriModalTitle heading="Modal 1 -" subHeading="Profile Modal" text="Example of Yuri dashboard profile card." />
          <div className="overflow-hidden">
            <img className="img-fluid media" src={`${ImagePath}/modal/social.png`} alt="social" />
            <Button color="primary" className="mx-auto mt-3" onClick={modalOneTogggle}>{ClickOut}</Button>
          </div>
          <ProfileModal modalOne={modalOne} modalOneTogggle={modalOneTogggle} />
        </div>
      </div>
    </Col>
  );
};
