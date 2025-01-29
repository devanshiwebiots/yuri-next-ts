import React, { useRef } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { PrintModalProps } from '../../../../../../Types/Contact.type';
import Image from 'next/image';
import { ImagePath } from '@/Constants';

export default function PrintModal({ printModal, selectedUser, toggleCallback }: PrintModalProps) {
   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });

   const printModalToggle = () => {
     toggleCallback(false);
     handlePrint();
   };

   const closePrintModal = () => {
     toggleCallback(false);
   };
    return (
      <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle} centered>
        <ModalHeader toggle={printModalToggle}>Print Preview</ModalHeader>
        <ModalBody className="list-persons">
          <div className="profile-mail pt-0" ref={contentRef}>
            <div className="common-flex align-items-center">
              <Image height={50} width={50} className="img-fluid rounded-circle" src={`${ImagePath}/user/2.png`} alt="" />
              <div className="flex-grow-1 mt-0">
                <h4>
                  <span>{selectedUser.name}</span>
                  <span>{selectedUser.surname}</span>
                </h4>
                <p>{selectedUser.email}</p>
              </div>
            </div>
            <div className="email-general">
              <h5>{"General"}</h5>
              <p>
                {"Email Address"} :
                <span className="font-primary" id="mailadd">
                  {selectedUser.email}
                </span>
              </p>
            </div>
          </div>
          <Button color="success" className="me-1" onClick={printModalToggle}>
            {"Print"}
          </Button>
          <Button color="primary" onClick={closePrintModal}>
            {"Cancel"}
          </Button>
        </ModalBody>
      </Modal>
    );
}
