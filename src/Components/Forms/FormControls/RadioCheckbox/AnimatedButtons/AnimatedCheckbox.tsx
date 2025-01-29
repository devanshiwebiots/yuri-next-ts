import { Col, Input, Label } from "reactstrap";
import { InstagramAnimated, WhatIsYourFavoriteSocialMedia } from "@/Constants";
import { Fragment } from "react";
import { AnimatedSocialData } from "@/Data/Forms";

export const AnimatedCheckbox = () => {
  return (
    <Col sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{WhatIsYourFavoriteSocialMedia}</h6>
        <Label className="d-block" htmlFor="chk-ani" check></Label>
        <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
        {InstagramAnimated}
        {AnimatedSocialData.map(({ id, text, defaultChecked }, index) => (
          <Fragment key={index}>
            <Label className="d-block" htmlFor={id} check></Label>
            <Input className="checkbox_animated" id={id} type="checkbox" defaultChecked={defaultChecked} />
            {text}
          </Fragment>
        ))}
      </div>
    </Col>
  );
};
