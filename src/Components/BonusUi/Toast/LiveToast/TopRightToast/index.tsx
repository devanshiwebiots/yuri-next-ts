import { Button, Toast, ToastBody } from "reactstrap";
import { ImagePath, TopRightToasts } from "@/Constants";
import Image from "next/image";
import { useState } from "react";

const TopRightToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>{TopRightToasts}</Button>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <div className="toast-header toast-img">
            <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/avtar/1.jpg`} alt="profile" />
            <strong className="me-auto">Yuri theme</strong>
            <small>5 min ago</small>
            <Button  close onClick={() => setOpen(false)}></Button>
          </div>
          <ToastBody className="toast-dark">Hello, I'm a web-designer.</ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default TopRightToast;
