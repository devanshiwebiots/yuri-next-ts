import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import { GradientButtonsTitle } from '@/Constants'
import { gradientButtonsData, gradientButtonsSubTitle } from '@/Data/Buttons'

export default function GradientButtons() {
    return (
        <Col xs={12}>
            <Card className="title-line">
                <CommonCardHeader title={GradientButtonsTitle} subTitle={gradientButtonsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {gradientButtonsData.map((data) => (
                            <Col xl={4} sm={data.sm} key={data.id}>
                                <div className="card-wrapper border rounded-3 light-card">
                                    <h6 className="sub-title fw-bold">{data.title}</h6>
                                    <div className="common-flex">
                                        {data.buttons.map((item) => (
                                            <Button key={item.id} color={item.color} className={item.btnClass}>{item.text}</Button>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
