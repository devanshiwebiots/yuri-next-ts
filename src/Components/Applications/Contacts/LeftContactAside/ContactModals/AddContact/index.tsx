import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Users } from 'react-feather';
import AddContactForm from './AddContactForm';

export default function AddContact() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Button color='transparent' block className="button-primary btn-block btn-mail w-100" onClick={toggle}>
                <Users className="me-2" />{'New Contacts'}
            </Button>
            <Modal className="modal-bookmark" isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>{'Add Contact'}</ModalHeader>
                <ModalBody>
                    <AddContactForm setModal={setModal} toggle={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}
