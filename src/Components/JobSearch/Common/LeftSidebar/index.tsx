import React, { useState } from 'react'
import { Button, Col } from 'reactstrap';
import CommonAccordionCard from './CommonAccordionCard';
import { commonAccordionCardData } from '@/Data/JobSearch';

export default function LeftSidebar() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return (
        <Col xl={3} className="xl-40 box-col-12">
            <div className="md-sidebar">
                <Button color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={toggle}>
                    Job Filter
                </Button>
                <div className={`md-sidebar-aside job-sidebar custom-scrollbar ${open ? 'open' : ''}`}>
                    <div className="default-according style-1 faq-accordion job-accordion">
                        {commonAccordionCardData.map((items) => (
                            <div className="accordion" key={items.id}>
                                <CommonAccordionCard items={items} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Col>
    )
}
