import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Padding } from "@/Constants";
import { PaddingSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const PaddingClass = () => {
  return (
    <Col className="col-xl-12">
      <Card className="card title-line padding-border">
        <CommonCardHeader title={Padding} subTitle={PaddingSubTitle} />
        <CardBody>
          <div className="border-wrapper h-100 light-background dark-helper">
            <h4 className="mb-3">{Padding}</h4>
            <div className="helper-common-box helper-p-wrapper">
              <div className="helper-p-box p-10 bg-light border">
                <span>.p-10</span>
              </div>
              <div className="helper-p-box p-15 bg-light border">
                <span>.p-15</span>
              </div>
              <div className="helper-p-box p-20 bg-light border">
                <span>.p-20</span>
              </div>
              <div className="helper-p-box p-25 bg-light border">
                <span>.p-25</span>
              </div>
              <div className="helper-p-box p-30 bg-light border">
                <span>.p-30</span>
              </div>
              <div className="helper-p-box p-35 bg-light border">
                <span>.p-35</span>
              </div>
              <div className="helper-p-box p-40 bg-light border">
                <span>.p-40</span>
              </div>
              <div className="helper-p-box p-45 bg-light border">
                <span>.p-45</span>
              </div>
              <div className="helper-p-box p-50 bg-light border">
                <span>.p-50</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaddingClass;
