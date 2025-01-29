import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Development, Marketing, Orderdetails, WebDesigner } from "@/Constants";
import { ProductDeliveryData } from "@/Data/General/Widgets/General";
import Image from "next/image";
import { Badge, Card, CardBody, CardHeader, Col } from "reactstrap";

const ProductDelievery = ({ col }: { col?: string }) => {
  return (
    <Col xl={col?Number(col):4} md="6" className="order-md-ix">
      <Card className="title-line delivery-card-1">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h2>
              Product Delivery<span className="f-12 f-w-500 f-light d-block">Total 10,987 Items Delivery</span>
            </h2>
            <div className="card-header-right-icon">
              <CommonDropdown dropdownToggle={Orderdetails} dropdownItems={[WebDesigner, Development, Marketing]} />
            </div>
          </div>
        </CardHeader>
        <CardBody className="delivery-content pt-0">
          <ul className="order-list mb-0 custom-scrollbar">
            {ProductDeliveryData.map((item, i) => (
              <li key={i}>
                <div className="light-card">
                  <Image height={50} width={50} className="img-fluid" src={item.productImage} alt="Helmet" />
                </div>
                <div className="order-content">
                  <div>
                    <h6 className="mb-1">{item.productName}</h6>
                    <span>
                      <span className="f-light f-w-500 f-12">{item.recipient}</span>
                    </span>
                  </div>
                  <div className="text-end">
                    <CommonDropdown dropdownItems={["Add to cart", "Cancel"]} />
                    <Badge color={`light-${item.color}`} className={`f-12 txt-${item.color}`}>
                      {item.status}
                    </Badge>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductDelievery;
