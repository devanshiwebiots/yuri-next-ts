import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import { CommonButtonsProps } from '../../../../Types/Buttons'

export default function CommonButtons({ title, md, xs, subTitle, bodyClass, commonButtonsData }: CommonButtonsProps) {
    return (
        <Col md={md} xs={xs}>
            <Card className='title-line'>
                <CommonCardHeader title={title} subTitle={subTitle} />
                <CardBody className={`common-flex ${bodyClass ? bodyClass : ''}`}>
                    {commonButtonsData.map((data, index) => (
                        <Button key={index} className={data.btnClass}
                            outline={data.outline} disabled={data.disabled}
                            size={data.size} id={data.id} color={data.color}>
                            {data.title}
                        </Button>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
