import { Col, Input, Label } from "reactstrap";
import { Custom, ImagePath } from "@/Constants";
import Image from "next/image";

export const CustomImagesWithCheckbox = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{Custom}</h6>
        <div className="img-checkbox">
          <Input className="main-img-cover" id="img-check-1" type="checkbox" />
          <Label className="mb-0" htmlFor="img-check-1" check>
            <Image width={346} height={220} src={`${ImagePath}/switch/1.jpg`} alt="coffee-beans" />
          </Label>
        </div>
      </div>
    </Col>
  );
};
