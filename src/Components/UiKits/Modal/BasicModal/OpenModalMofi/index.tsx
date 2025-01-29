import React, { useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { OpenModalForm } from "./OpenModalForm";
import { Button } from "reactstrap";
import { OpenModalForYuri, YuriSignUp } from "@/Constants";

const OpenModalYuri = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModaltoggle = () => setOpenModal(!openModal);

  return (
    <>
      <Button color="primary" onClick={openModaltoggle}>
        {OpenModalForYuri}
      </Button>
      <CommonModal
        isOpen={openModal}
        toggle={openModaltoggle}
        modalBodyClassName="p-0"
        heading="Yuri SIGN-UP"
      >
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <h3 className="modal-header justify-content-center border-0">
            {YuriSignUp}
          </h3>
          <OpenModalForm modal={openModaltoggle} />
        </div>
      </CommonModal>
    </>
  );
};

export default OpenModalYuri;
