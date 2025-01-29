import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ImagePath, VariationRadios } from "@/Constants";
import { VariationRadioData, VariationRadioDataList } from "@/Data/Forms";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationRadioProp } from "@/Types/Form";
import Image from "next/image";
import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";

const VariationRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={VariationRadios} subTitle={VariationRadioData} />
        <CardBody>
          <Row className="g-3">
            {VariationRadioDataList.map(({ colClass, title, child }, index) => (
              <Col xl="4" className={colClass ? colClass : ""} key={index}>
                <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                  <h6 className="sub-title">{title}</h6>
                  {child.map(({ id, labelText, image, icon, name, defaultChecked, iconColor }:VariationRadioProp) => (
                    <div className="payment-wrapper" key={id}>
                      <div className="payment-first">
                        <FormGroup className="radio radio-primary" check>
                          <Input id={`ptm-${id}`} type="radio" name={name} value="option1" defaultChecked={defaultChecked} />
                          <Label className="mb-0" htmlFor={`ptm-${id}`}>{labelText}</Label>
                        </FormGroup>
                      </div>
                      {(image || icon) && (
                        <div className="payment-second">
                          {image && <Image width={50} height={34} className="img-fluid" src={`${ImagePath}/${image}`} alt="ecommerce" />}
                          {icon && <SvgIcon className={`mega-icons stroke-${iconColor}`} iconId={icon} />}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationRadio;
