import { Col, Input, Label } from "reactstrap";
import { Custom, ImagePath } from "@/Constants";
import Image from "next/image";

const CustomImagesWithRadio = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{Custom}</h6>
        <div className="img-checkbox">
          <Input className="main-img-cover" id="img-radio-1" type="radio" name="radio6"/>
          <Label className="mb-0" htmlFor="img-radio-1" check>
            <Image width={346} height={220} src={`${ImagePath}/switch/5.jpg`} alt="coffee-beans" />
          </Label>
        </div>
      </div>
    </Col>
  )
}

export default CustomImagesWithRadio