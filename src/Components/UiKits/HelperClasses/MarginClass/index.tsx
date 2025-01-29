import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Margins } from "@/Constants";
import { MarginClassSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const MarginClass = () => {
  return (
    <Col xl="12">
      <Card className="title-line margin-border">
        <CommonCardHeader title={Margins} subTitle={MarginClassSubTitle} />
        <CardBody>
          <div className="gradient-border">
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-10 border bg-light" />
              <span>.m-10</span>
            </div>
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-15 border bg-light" />
              <span>.m-15</span>
            </div>
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-20 border bg-light" />
              <span>.m-20</span>
            </div>
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-25 border bg-light" />
              <span>.m-25</span>
            </div>
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-30 border bg-light" />
              <span>.m-30</span>
            </div>
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-35 border bg-light" />
              <span>.m-35</span>
            </div>
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-40 border bg-light" />
              <span>.m-40</span>
            </div>
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-45 border bg-light" />
              <span>.m-45</span>
            </div>
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-50 border bg-light" />
              <span>.m-50</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarginClass;
