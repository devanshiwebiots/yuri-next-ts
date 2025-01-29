import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
// import ReactQuill from 'react-quill'
import CommonCardHeader from '@/CommonComponents/CommonCardHeader';
import { SnowThemeContent } from '@/Data/Miscellaneous/Editors';

export default function SnowTheme() {
    const [value, setValue] = useState(SnowThemeContent);

    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader title={'Snow Theme'} />
                    <CardBody>
                        {/* <ReactQuill theme='snow' value={value} onChange={setValue} /> */}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
