import { Card, CardBody, Col } from "reactstrap";
import { IconInHeadings, ImagePath } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { IconInHeadingData } from "@/Data/BonusUi/BasicCard";
import Image from "next/image";

const IconInHeading = () => {
  const LibraryIcon = () => {
    return <i className="icofont icofont-library me-2"></i>;
  };
  
  return (
    <Col sm="12" xl="6">
      <Card className="title-line">
        <CommonCardHeader title={IconInHeadings} subTitle={IconInHeadingData} icon={<LibraryIcon/>} />
        <CardBody>
          <div className="flex-space flex-wrap align-items-center">
            <Image width={136} height={86} className="tab-img" src={`${ImagePath}/blog/img.png`} alt="profile" />
            <p><strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020<br /><strong>Mail Us:</strong>contact@us@gmail.com<br /><strong>Contact Number: </strong>(954) 357-7760</p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInHeading;
