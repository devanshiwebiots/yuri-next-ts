import { Card, CardBody, Col, Row } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalScrollbars, ImagePath } from "@/Constants";
import { HorizontalScrollData, HorizontalScrollDataList } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";

const HorizontalScrollbar = () => {
  return (
    <Col xl="6">
      <Card className="title-line">
        <CommonCardHeader title={HorizontalScrollbars} subTitle={HorizontalScrollData} />
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: "300px" }}>
            <div className="horz-scroll-content " style={{width:'1600px'}}>
              <Row>
                <Col xs="2">
                  <div className="horizontal-img"><img className="img-fluid" src={`${ImagePath}/scrollbar/fashion1.jpg`} alt="girl" /></div>
                </Col>
                {HorizontalScrollDataList.map((src, index) => (
                  <Col xs="2" key={index}>
                    <div className="horizontal-img"><img className="img-fluid" src={`${ImagePath}/${src}`} alt="girl" /></div>
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScrollbar;
