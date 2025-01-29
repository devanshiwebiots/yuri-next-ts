import React from 'react'
import { CheckboxButtonTitle } from '@/Constants'
import { Button, ButtonGroup, Col, Input, Label } from 'reactstrap'
import { radioButtonData } from '@/Data/Buttons'

export default function CheckboxButton() {
    return (
        <Col xl={6}>
            <div className="card-wrapper border rounded-3 light-card">
                <h6 className="sub-title fw-bold">{CheckboxButtonTitle}</h6>
                <ButtonGroup className="btn-option">
                    {radioButtonData.map((item) => (
                        <Button color='light-dark' key={item.id}>
                            <div className="checkbox checkbox-dark">
                                <Input id={`checkbox-primary-${item.id}`} type="checkbox" />
                                <Label className="mb-0" htmlFor={`checkbox-primary-${item.id}`}>{item.text}</Label>
                            </div>
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        </Col>
    )
}
