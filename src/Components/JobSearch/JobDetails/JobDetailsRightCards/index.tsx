import React from 'react'
import { Col, Row } from 'reactstrap'
import ProductDesignerCard from './ProductDesignerCard'
import { SimilarJobs } from '@/Constants'
import RightSidebarCards from '../../Common/RightSidebarCards'

export default function JobDetailsRightCards() {
    return (
        <Col xl={9} className="xl-60 box-col-12">
            <ProductDesignerCard />
            <div className="header-faq">
                <h4 className="mb-0 f-w-600">{SimilarJobs}</h4>
            </div>
            <Row>
                <RightSidebarCards limit={4} colClass='col-xl-6 xl-100' />
            </Row>
        </Col>
    )
}
