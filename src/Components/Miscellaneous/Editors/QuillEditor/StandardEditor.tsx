import CommonCardHeader from '@/CommonComponents/CommonCardHeader';
import { StandardQuillText } from '@/Data/Miscellaneous/Editors';
import { useState } from 'react';
// import ReactQuill from 'react-quill';
import { Card, CardBody, Col, Row } from 'reactstrap';

export default function StandardEditor() {
    const [value, setValue] = useState(StandardQuillText);
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader title={'Standard Editor'} />
                    <CardBody>
                        {/* <ReactQuill value={value} onChange={setValue} /> */}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
