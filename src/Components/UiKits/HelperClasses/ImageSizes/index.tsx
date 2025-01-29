import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, ImageSizes } from "@/Constants";
import { ImageSizesClassData, ImageSizesSubTitle } from "@/Data/UiKits/HelperClasses";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const ImageSizesClass = () => {
  return (
    <Col xl="6">
      <Card className=" height-equal title-line">
        <CommonCardHeader title={ImageSizes} subTitle={ImageSizesSubTitle} />
        <CardBody>
          <div className="gradient-border gap-3">
            {ImageSizesClassData.map((item, index) => (
              <Image key={index} height={item} width={item} className={`img-${item} img-h-${item}`} src={`${ImagePath}/blog/comment.jpg`} alt={`img-size-${item}`} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageSizesClass;
