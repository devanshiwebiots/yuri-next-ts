import { ImagePath } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { CommonErrorPageType } from "@/Types/Others";``
import Image from "next/image";
import React from "react";
import { Button, Col, Container } from "reactstrap";

const CommonErrorPage: React.FC<CommonErrorPageType> = ({ error, color, src }) => {
  const BackToHomePage: string = "BACK TO HOME PAGE";
  const ErrorContent: string = "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.";
  

  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
         { !src && <Image width={100} height={100} className="img-100" src={`${ImagePath}/gif/sad.gif`} alt="" />}
         {src && <Image width={100} height={100} className="img-100" src={`${ImagePath}/other-images/sad.png`} alt="" />}
          
          <div className="error-heading">
            <h2 className={`headline font-${color}`}>{error}</h2>
          </div>
          <Col md="8" className="offset-md-2">
            <p className="sub-content">{ErrorContent}</p>
          </Col>
          <div>
            <Button size="lg" tag="a" color={`${color}-gradien`} href={`/dashboard/default`}>
              {BackToHomePage}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CommonErrorPage;
