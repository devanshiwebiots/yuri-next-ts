//@ts-nocheck
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SquareRatingBar } from "@/Constants";
import { SquareRatingData } from "@/Data/BonusUi/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const SquareRating = () => {
  const [rating, setRating] = useState(3);
  const data = [1, 2, 3, 4, 5];

  return (
    <Col xxl="4" md="6">
      <Card className="title-line">
        <CommonCardHeader title={SquareRatingBar} subTitle={SquareRatingData} />
        <CardBody>
          <div className="rating ">
            <Rating initialRating={rating} emptySymbol={data.map((n: number) => (<span className="square-number" key={n}>{n}</span>))}
              fullSymbol={data.map((n: number) => (<span className="square-number active" key={n}>{n}</span>))}
              onChange={(rate) => setRating(rate)}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SquareRating;
