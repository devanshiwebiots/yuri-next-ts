import React, { useState } from "react";
import { Button, Col } from "reactstrap";
import { CommonYuriModalTitle } from "../Common/CommonYuriModalTitle";
import Image from "next/image";
import { ClickOut, ImagePath } from "@/Constants";
import { BalanceModal } from "./BalanceModal";

const ModalThird = () => {
  const [modalThird, setModalThird] = useState(false);
  const modalThirdTogggle = () => setModalThird(!modalThird);

  return (
    <Col xl="4" md="12" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="yuri-demo-img">
          <CommonYuriModalTitle heading="Modal 3 -" subHeading="Balance Modal" text="Example of Yuri dashboard balance card." />
          <div className="overflow-hidden balance-modal">
            <Image width={475} height={287} src={`${ImagePath}/modal/social.png`} alt="learning" />
            <Button color="primary" className="mx-auto mt-3" onClick={modalThirdTogggle}>{ClickOut}</Button>
          </div>
          <BalanceModal modalThird={modalThird} modalThirdTogggle={modalThirdTogggle} />
        </div>
      </div>
    </Col>
  );
};

export default ModalThird;
