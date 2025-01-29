import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FontSize } from "@/Constants";
import { FontSizesSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const FontSizesClass = () => {
  return (
    <Col xs="12">
      <Card className="title-line">
        <CommonCardHeader title={FontSize} subTitle={FontSizesSubTitle} />
        <CardBody>
          <div className="gradient-border">
            <div className="font-wrapper border">
              <div className="f-14">Font-size .f-14</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-16">Font-size .f-16</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-18">Font-size .f-18</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-20">Font-size .f-20</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-22">Font-size .f-22</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-24">Font-size .f-24</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-26">Font-size .f-26</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-28">Font-size .f-28</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-30">Font-size .f-30</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-32">Font-size .f-32</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-34">Font-size .f-34</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-36">Font-size .f-36</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-38">Font-size .f-38</div>
            </div>
            <div className="font-wrapper border">
              <div className="f-40">Font-size .f-40</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontSizesClass;
