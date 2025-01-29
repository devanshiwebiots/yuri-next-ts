import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Button, Card, CardHeader, Col } from "reactstrap";

const BoostWorkingCard = () => {
  return (
    <Col xl="3" md="4" sm="6" className=" order-xl-iv col-xl-50 order-sm-ii">
      <Card className=" store-card">
        <CardHeader className=" card-no-border">
          <h3 className="f-w-600">We are working to boost lovely mood</h3>
          <span className="f-light f-w-500 mt-2">Projects this month</span>
          <Button tag="a" color="primary" className="btn-hover-effect" href="../dashboard/ecommerce">
            Create a Store
          </Button>
        </CardHeader>
        <div className="card-body pb-1 text-center">
          <div className="store-image">
            <Image height={50} width={50} className="img-fluid" src={`${ImagePath}/dashboard-2/bg3.gif`} alt="store" />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default BoostWorkingCard;
