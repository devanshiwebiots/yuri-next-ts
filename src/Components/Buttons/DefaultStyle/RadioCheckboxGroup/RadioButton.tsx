import React from 'react'
import { Button, ButtonGroup, Col, Input, Label } from 'reactstrap'
import { radioButtonData } from '@/Data/Buttons'
import { RadioButtonTitle } from '@/Constants'

export default function RadioButton() {
    return (
        <Col xl={6}>
            <div className="card-wrapper border rounded-3 light-card">
                <h6 className="sub-title fw-bold">{RadioButtonTitle}</h6>
                <div className="btn-radio">
                    <ButtonGroup>
                        {radioButtonData.map((item) => (
                            <Button color='light-primary' key={item.id}>
                                <div className="radio radio-primary">
                                    <Input id={`radio${item.id}`} type="radio" name="radio1" value="option1" defaultChecked={item.id === 8 ? true : false} />
                                    <Label className="mb-0" htmlFor={`radio${item.id}`}>{item.text}</Label>
                                </div>
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}
