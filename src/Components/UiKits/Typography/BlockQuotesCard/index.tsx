import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, CardBody, Col } from "reactstrap";
import { BlockquotesTitle } from "../../../../Constants";
import {
    blockQuotesData,
    blockQuotesSubTitle,
} from "../../../../Data/UiKits/Typography";

const BlockQuotesCard = () => {
  return (
    <Col sm={12}>
      <Card className="overflow-hidden title-line">
        <CommonCardHeader
          title={BlockquotesTitle}
          subTitle={blockQuotesSubTitle}
        />
        <CardBody>
          {blockQuotesData &&
            blockQuotesData.map((item, index) => (
              <div
                key={index}
                className={`figure d-block dark-blockquote ${
                  item.class ? item.class : ""
                }`}
              >
                <blockquote
                  className={`blockquote light-card bg-light-${item.color}`}
                >
                  <p className="mb-0 txt-dark">{item.text}</p>
                  <span className="blockquote-footer pt-3">{item.footer}</span>
                </blockquote>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlockQuotesCard;
