import React, { useState } from 'react'
import { Button, Col, Form, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

export default function CategoryModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Button color='transparent' className="btn-category" onClick={toggle}><span className="title">{'+ Add Category'}</span></Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{'Add Category'}</ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark">
                        <Row className="g-3">
                            <Col md={12}>
                                <Input type="text" required placeholder="Enter category name" />
                            </Col>
                        </Row>
                        <Button color='success' className='me-2' onClick={toggle}>{'Save'}</Button>
                        <Button color='primary' onClick={toggle}>{'Cancel'}</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

