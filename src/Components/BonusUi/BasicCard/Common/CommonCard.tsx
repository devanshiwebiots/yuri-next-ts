import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { YuriTheme } from "@/Constants";
import { CommonCardProp } from "@/Types/BonusUi";

const CommonCard :React.FC<CommonCardProp>= ({ data }) => {
  return (
    <>
      <Col xl="4" sm={data.sm}>
        <Card className="height-equal title-line">
          <CardHeader className={data.headerClass}>
            <h2 className={data.headingClass}>{data.title}</h2>
          </CardHeader>
          <CardBody className={data.bodyClass}>
            <h5 className={`${data.bodyText} pb-2 `}>{data.text}</h5>
            <p className="mb-0">{data.span}</p>
          </CardBody>
          <CardFooter className={data.footerClass}>
            <h6 className={`mb-0 text-end ${data?.textClass}`}>{YuriTheme}</h6>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default CommonCard;
