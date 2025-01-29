import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { OutlinedTouchspins } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultTouchSpinData, TouchSpinData } from "@/Data/Forms";
import { CommonTouchspin } from "./Common/CommonTouchspin";

const OutlinedTouchspin = () => {
  const initialValues = DefaultTouchSpinData.map((data) => data.value);
  const [values, setValues] = useState(initialValues);
  
  const handleIncrement = (index:number) => {
    setValues((prevValues) => {
      return prevValues.map((value, i) => (i === index ? value + 1 : value));
    });
  };
  const handleDecrement = (index:number) => {
    setValues((prevValues) => {
      return prevValues.map((value, i) => (i === index && value > 0 ? value - 1 : value));
    });
  };
  return (
    <Col xl="6">
      <Card className="title-line">
        <CommonCardHeader title={OutlinedTouchspins}  subTitle={TouchSpinData} />
        <CardBody className="common-flex">
          {DefaultTouchSpinData.map((data) => (
            <CommonTouchspin key={data.id} outline color={data.color} value={values[data.id - 1]} onIncrement={() => handleIncrement(data.id - 1)} 
                onDecrement={() => handleDecrement(data.id - 1)} btnClass={`spin-border-${data.color}`}/>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
};

export default OutlinedTouchspin;
