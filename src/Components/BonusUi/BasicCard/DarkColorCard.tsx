import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DarkColorCards, FooterCard, ImagePath, SmartHeadphones } from "@/Constants";
import { DarkColorData, DarkColorText1 } from "@/Data/BonusUi/BasicCard";
import Image from "next/image";
import { Card, CardBody, CardFooter, Col } from "reactstrap";

const DarkColorCard = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={DarkColorCards} subTitle={DarkColorData}  headClass='bg-dark' titleClass="text-white" />
        <CardBody className="bg-dark">
          <div className="d-flex align-items-center gap-3 pills-blogger">
            <div className="blog-wrapper">
              <Image width={100} height={100} className="blog-img" src={`${ImagePath}/dashboard-2/product/headphone.png`} alt="head-phone" />
            </div>
            <div className="blog-content">
              <p>
                <em className="txt-danger fw-bold">{SmartHeadphones}</em>
                {DarkColorText1}
              </p>
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-dark">
          <h6 className="text-white mb-0">{FooterCard}</h6>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default DarkColorCard;
