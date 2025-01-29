import { useState } from 'react';
// import ReactQuill from 'react-quill';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonCardHeader from '@/CommonComponents/CommonCardHeader';
import { BubbleThemeContent } from '@/Data/Miscellaneous/Editors';

export default function BubbleTheme() {
    const [value, setValue] = useState(BubbleThemeContent);

    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader title={'Bubble Theme'} />
                    <CardBody>
                        {/* <ReactQuill theme='bubble' value={value} onChange={setValue} /> */}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

