import { Col, Input, Label, Row } from 'reactstrap'
import { CashOnDelivery, CheckPayments, ImagePath, Paypal } from '@/Constants'
import Image from 'next/image'

const CheckPayment = () => {
  return (
    <div className="animate-chk">
      <Row>
        <Col>
          <Label className="d-block" for="edo-ani" check>
            <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />{CheckPayments}
          </Label>
          <Label className="d-block" for="edo-ani1" check>
            <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani"/>
            {CashOnDelivery}
          </Label>
          <Label className="d-block" for="edo-ani2" check>
            <Input className="align-middle radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked/>
            {Paypal}
            <Image width={205} height={70} className="img-paypal h-auto" src={`${ImagePath}/other-images/paypal1.png`} alt="paypal" />
          </Label>
        </Col>
      </Row>
    </div>
  )
}

export default CheckPayment