import { Button, Card, CardBody, Col } from "reactstrap";
import { FactorAuthentication, ImagePath, TwoFactorAuthenticationHeading } from "@/Constants";
import ModalOne from "./ModalOne";
import { useAppDispatch } from "@/ReduxToolkit/Hooks";
import Image from "next/image";
import { setModalOne } from "@/ReduxToolkit/Reducers/TwoFactorSlice";

const TwoFactorAuthentication = () => {
  const dispatch = useAppDispatch()
  return (
    <Col sm="12">
      <Card>
        <CardBody className="authentication-body">
          <div className="authentication-wrapper">
            <h2>{TwoFactorAuthenticationHeading}</h2>
            <p className="f-m-light mt-1 mb-0">Click on the authentication button below and scan the QR code</p>
            <img src={`${ImagePath}/forms/qr-scan.png`} alt="qr-scan"/>
          </div>
          <Button tag="a" color="primary" className="mt-5" onClick={()=>dispatch(setModalOne())}>{FactorAuthentication}</Button>
          <ModalOne />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TwoFactorAuthentication;
