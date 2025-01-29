import { Display, DisplayHeadingTitle } from "@/Constants";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const DisplayHeading = () => {
  return (
    <Col xs={12}>
      <Card className="title-line">
        <CardHeader>
          <h2 className="mb-0">{DisplayHeadingTitle}</h2>
          <p className="f-m-light mt-1">
            {"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "}
            <mark>{"display heading"}</mark>
            {"larger, slightly more opinionated heading style."}
          </p>
        </CardHeader>
        <CardBody className="d-flex flex-column gap-2">
          {[...Array(4)].map((item, index) => (
            <h3 key={index} className={`display-${item}`}>
              {Display} {index + 1}
            </h3>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayHeading;
