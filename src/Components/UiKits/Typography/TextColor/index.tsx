import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonComponents/CommonCardHeader";
import { TextColorTitle } from "../../../../Constants";
import {
    textColorData,
    textColorSubTitle,
} from "../../../../Data/UiKits/Typography";

const TextColor = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="title-line">
        <CommonCardHeader title={TextColorTitle} subTitle={textColorSubTitle} />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            {textColorData &&
              textColorData.map((item, index) => (
                <p key={index} className={`mb-0 txt-${item.class}`}>
                  {" "}
                  {item.text} <code>{`.txt-${item.class}`}</code> {"class"}
                </p>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColor;
