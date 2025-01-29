import React from 'react'
import { Button, ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import { ButtonGroupTitle } from '@/Constants'
import { buttonGroupData, buttonGroupSubTitle } from '@/Data/Buttons'

export default function ButtonGroupCard() {
    return (
        <Col xs={12}>
            <Card className="title-line">
                <CommonCardHeader title={ButtonGroupTitle} subTitle={buttonGroupSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {buttonGroupData.map((data) => (
                            <Col xl={4} className={data.id === 3 ? "col-12" : "col-md-6"} key={data.id}>
                                <div className="card-wrapper border rounded-3 h-100">
                                    <h6 className="sub-title fw-bold">{data.title}</h6>
                                    <div className={`button-wrapper ${data.id === 1 ? "button-variation" : ""}`}>
                                        {data.child.map((item) => (
                                            <ButtonGroup className={item.btnClass} key={item.id}>
                                                {item.buttons.map((list) => (
                                                    <Button color={list.color} outline={list.outline} size={list.size} key={list.id}>{list.title}</Button>
                                                ))}
                                            </ButtonGroup>
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
