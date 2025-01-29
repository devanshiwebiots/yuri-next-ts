import { ImagePath, WeAreComingSoon } from "@/Constants";
import Image from "next/image";
import React from "react";
import { Container } from "reactstrap";
import CountdownData from "./CountdownData";

const ComingSoonSimpleContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="comingsoon">
          <div className="comingsoon-inner text-center">
            <Image width={136} height={40} src={`${ImagePath}/logo/logo.png`} alt="coming soon" />
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonSimpleContainer;
