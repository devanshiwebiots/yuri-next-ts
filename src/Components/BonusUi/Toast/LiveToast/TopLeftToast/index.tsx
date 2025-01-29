import { ImagePath, TopLeftToasts } from "@/Constants";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Toast, ToastBody } from "reactstrap";

const TopLeftToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <Button color="warning" onClick={toggle}>{TopLeftToasts}</Button>
      <div className="toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <div className="toast-header toast-img">
            <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/avtar/1.jpg`} alt="profile" />
            <strong className="me-auto">Yuri theme</strong>
            <small className="d-sm-block d-none">10 min ago</small>
            <Button close onClick={() => setOpen(false)}></Button>
          </div>
          <ToastBody className="toast-dark">
            <strong className="txt-success">Well done!</strong> You successfully read this important message.
          </ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default TopLeftToast;
