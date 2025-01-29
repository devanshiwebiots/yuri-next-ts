import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import { RadioCheckboxGroupTitle } from '@/Constants'
import { radioCheckboxGroupSubTitle } from '@/Data/Buttons'
import RadioButton from './RadioButton'
import CheckboxButton from './CheckboxButton'

export default function RadioCheckboxGroup() {
    return (
        <Col xs={12}>
            <Card className="title-line">
                <CommonCardHeader title={RadioCheckboxGroupTitle} subTitle={radioCheckboxGroupSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <RadioButton/>
                        <CheckboxButton/>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
