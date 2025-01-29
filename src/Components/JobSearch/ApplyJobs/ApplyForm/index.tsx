import React from 'react'
import { Button, Card, CardBody, CardFooter, Col } from 'reactstrap'
import { Cancel, Href, ImagePath, Submit, UIDesigner } from '@/Constants'
import PersonalDetails from './PersonalDetails'
import YourEducation from './YourEducation'
import YourExperience from './YourExperience'
import UploadFiles from './UploadFiles'
import Image from 'next/image'

export default function ApplyForm() {
    return (
        <Col xl={9} className="xl-60 box-col-12">
            <Card>
                <div className="job-search">
                    <CardBody className="pb-0">
                        <div className="d-flex">
                            <Image height={50} width={50} className="img-40 img-fluid m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt="" />
                            <div className="flex-grow-1">
                                <h6 className="f-w-600">
                                    <a href={Href}>{UIDesigner}</a>
                                    <span className="pull-right">
                                        <Button color='primary'><span><i className="fa fa-check text-white"></i></span> Save This Job</Button>
                                    </span>
                                </h6>
                                <p>{'Endless Telecom & Technologies , NY'}
                                    <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span>
                                </p>
                            </div>
                        </div>
                        <div className="job-description">
                            <PersonalDetails />
                            <YourEducation />
                            <YourExperience />
                            <UploadFiles />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button color='primary' className='me-2'>{Submit}</Button>
                        <Button color='light'>{Cancel}</Button>
                    </CardFooter>
                </div>
            </Card>
        </Col>
    )
}
