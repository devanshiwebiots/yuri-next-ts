import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Cancelled, CancelledOrder, Href, ImagePath } from "@/Constants";
import { OrderData } from "@/Data/Ecommerce";
import Image from "next/image";
import { useState } from "react";
import { X } from "react-feather";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

const CancelledOrders = () => {
  const [cancelledOrder, setCancelledOrder] = useState(OrderData);
  const deleteHandler = (id: number) => {
    const newData = cancelledOrder.filter((item) => item.id !== id);
    setCancelledOrder([...newData]);
  };

  return (
    <Card>
    <CommonCardHeader title={CancelledOrder} />
    <CardBody>
      <Row className="g-sm-4 g-3">
        {cancelledOrder.map((item, index) => (
          <Col xl="4" md="6" key={index}>
            <div className="prooduct-details-box">
              <div className="d-flex">
                <Image width={60} height={60} className="align-self-center img-fluid img-60" src={`${ImagePath}/ecommerce/${item.image}`} alt={item.name} />
                <div className="flex-grow-1 ms-3">
                  <div className="product-name"><h6><a href={Href}>{item.name}</a></h6></div>
                  <Rating initialValue={5} size={17} />
                  <div className="price d-flex p-0 border-0"><div className="text-muted">Price</div>: 210$</div>
                  <div className="avaiabilty"><div className="text-success">In stock</div></div>
                  <Button tag="a" color="danger" size="xs" href={Href}>{Cancelled}</Button>
                  <X className="close" onClick={() => deleteHandler(item.id)} />
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  </Card>
  )
};

export default CancelledOrders;
