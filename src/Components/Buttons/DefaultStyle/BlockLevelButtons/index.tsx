import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import { BlockLevelButtonsTitle } from '@/Constants'
import { blockLevelButtonsData, blockLevelButtonsSubTitle } from '@/Data/Buttons'

export default function BlockLevelButtons() {
    return (
        <Col xs={12}>
            <Card className="title-line">
                <CommonCardHeader title={BlockLevelButtonsTitle} subTitle={blockLevelButtonsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {blockLevelButtonsData.map((data) => (
                            <Col xs={12} key={data.id}>
                                <div className="card-wrapper border rounded-3">
                                    <h6 className="sub-title fw-bold">{data.title}</h6>
                                    <div className={`d-grid gap-2 buttons-box ${data.divClass}`}>
                                        {data.buttons.map((item) => (
                                            <Button key={item.id} color={item.color}>{item.title}</Button>
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
