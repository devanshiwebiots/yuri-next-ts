import { Fragment } from "react";
import { Col, Row } from "reactstrap";
import AccordionCard from "../Common/AccordionCard";
import FaqRightsidebar from "./FaqRightside";
import { QuickQuestions } from "@/Constants";
import { FaqQueastionData } from "@/Data/Miscellaneous/Faq";

const Questions = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h2 className="mb-0">{QuickQuestions}</h2>
      </div>
      <Row className="default-according style-1 faq-accordion">
        <Col xl="8" lg="6" md="7" className="xl-60">
          {FaqQueastionData.map((item, i) => (
            <Fragment key={i}>
              {item.subTitle && (
                <div className="faq-title">
                  <h6>{item.subTitle}</h6>
                </div>
              )}
              {FaqQueastionData[i].titles.map((item, id) => (
                <AccordionCard key={id} item={item} />
              ))}
            </Fragment>
          ))}
        </Col>
        <FaqRightsidebar />
      </Row>
    </Col>
  );
};
export default Questions;
