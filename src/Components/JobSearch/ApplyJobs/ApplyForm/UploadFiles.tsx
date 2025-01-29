import React from 'react'
import { UploadCoverLetter, UploadRecommendations, UploadYourCV, UploadYourFiles } from '@/Constants'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default function UploadFiles() {
    return (
        <>
            <h6 className="mb-0">{UploadYourFiles}</h6>
            <Form className='theme-form'>
                <Row>
                    <Col>
                        <FormGroup>
                            <Col><Label className='pt-0'>{UploadCoverLetter}:<span className='font-danger'>{'*'}</span></Label></Col>
                            <Input type='file' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Col><Label className='pt-0'>{UploadYourCV}:<span className='font-danger'>{'*'}</span></Label></Col>
                            <Input type='file' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Col><Label className='pt-0'>{UploadRecommendations}:<span className='font-danger'>{'*'}</span></Label></Col>
                            <Input type='file' />
                        </div>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
