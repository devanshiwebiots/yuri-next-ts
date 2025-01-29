import { Button, Card, CardBody, Col, ListInlineItem, Row } from "reactstrap";
import {  HorizontalTimelines, Href, ReadMoreTour } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalTimeLineData, HorizontalTimeLineDataList } from "@/Data/BonusUi/Timeline";
import { HorizontalTimelineProp } from "@/Types/BonusUi";

const HorizontalTimeline = () => {
  return (
    <Col xxl="8" xl="7" className="box-col-12">
      <Card className="title-line ">
        <CommonCardHeader title={HorizontalTimelines} subTitle={HorizontalTimeLineData} />
        <CardBody>
          {HorizontalTimeLineDataList.map(({ mainClass, child }: HorizontalTimelineProp, index) => (
            <Row className={`list-inline events timeline-list ${mainClass}`} key={index}>
              {child.map(({ colClass, color, date, header, paragraph, verticalLine1, verticalLine2 }, index) => (
                <Col xxl="4" className={colClass} key={index}>
                  <div>
                    {verticalLine2 && <div className={verticalLine2}></div>}
                    <ListInlineItem className="event-list">
                      <div className="px-4">
                        <div className={`event-date alert-light-${color} txt-${color}`}>{date}</div>
                        <h4>{header} </h4>
                        <p className="text-muted">{paragraph}</p>
                        <div className="read-more-btn"><Button color="primary" tag="a" href={Href} className="px-3">{ReadMoreTour}</Button></div>
                      </div>
                    </ListInlineItem>
                    {verticalLine1 && <div className={verticalLine1}></div>}
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalTimeline;
