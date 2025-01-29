import { Card, CardBody, Col, Row } from "reactstrap"
import { CustomRadios } from "@/Constants"
import { BorderedRadio } from "./BorderedRadio"
import { IconsRadio } from "./IconsRadio"
import { FilledRadio } from "./FilledRadio"
import CommonCardHeader from "@/CommonComponents/CommonCardHeader"
import { CustomRadioData } from "@/Data/Forms"

const CustomRadio = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CustomRadios} subTitle={CustomRadioData} />
        <CardBody>
          <Row className="g-3">
            <BorderedRadio />
            <IconsRadio />
            <FilledRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomRadio