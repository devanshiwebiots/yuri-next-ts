import { ImagePath } from "@/Constants";
import Image from "next/image";
import CountUp from "react-countup";
import { Col, Row } from "reactstrap";

export default function InvoiceSixHeader() {
  return (
    <div>
      <Row>
        <Col sm={6}>
          <div className="d-flex">
            <div className="media-left">
              <Image height={100} width={100} className="media-object img-60 for-light h-auto" src={`${ImagePath}/other-images/logo-login.png`} alt="logo" />
              <Image height={100} width={100} className="img-fluid for-dark img-60 " src={`${ImagePath}/other-images/logo-login-dark.png`} alt="logo"  />
            </div>
            <div className="flex-grow-1 m-l-20 text-right">
              <h4 className="media-heading">{"Yuri"} </h4>
              <p>
                {"hello@yuri.in"}
                <br />
                <span>{"289-335-6503"}</span>
              </p>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="text-md-end text-xs-center">
            <h3>
              {"Invoice"}
              <CountUp end={1069} prefix="#" className="counter" />
            </h3>
            <p>
              {"Issued: May"}
              <span> {"27, 2024"}</span>
              <br /> {"Payment Due: June"} <span>{"27, 2024"}</span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
