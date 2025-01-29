import { Card, CardBody, CardFooter, Col } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import FaqProductHover from "./FaqProductHover";
import { FeaturesData } from "@/Data/Miscellaneous/Faq";
import Image from "next/image";
import { ImagePath, StarColor } from "@/Constants";

const FaqFeaturesTutorial = () => {
  return (
    <>
      {FeaturesData.map((item, id) => (
        <Col xxl="3" md="6" className="box-col-6" key={id}>
          <Card className="features-faq product-box">
            <div className="faq-image product-img">
              <Image width={345} height={265} alt="feature" className="img-fluid" src={`${ImagePath}/faq/${item.image}`} />
              <FaqProductHover />
            </div>
            <CardBody>
              <h4 className="mb-1">{item.title}</h4>
              <p>{item.description}</p>
            </CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
              <span>{item.date}</span>
              <Rating fillColor={StarColor} initialValue={Math.random() * 5} size={14} />
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default FaqFeaturesTutorial;
