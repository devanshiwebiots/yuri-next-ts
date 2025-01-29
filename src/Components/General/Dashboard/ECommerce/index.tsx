import { Col, Container, Row } from "reactstrap";
import BoostWorkingCard from "./BoostWorkingCard";
import CustomerRate from "./CustomerRate";
import DealCard from "./DealCard";
import ExpectedEarning from "./ExpectedEarning";
import GeneralCards from "./GeneralCards";
import RecentOrder from "./RecentOrders";
import RevenueAndOrder from "./RevenueAndOrder";
import SalesOverview from "./SalesOverview";
import StockReport from "./StockReport";
import WeeklyVisitors from "./WeeklyVisitors";
import ProductDelivery from "./ProductDelivery";
import Activities from "./Activities";

const ECommerceContainer = () => {
  return (
    <Container fluid className=" dashboard2">
      <Row>
        <Col xl="9" className="col-xl-80">
          <Row>
            <SalesOverview />
            <BoostWorkingCard />
            <RevenueAndOrder />
            <GeneralCards />
            <RecentOrder />
            <StockReport />
            <Col xl="5" md="6" xs="12" className=" order-xl-vi col-xl-100 ">
              <Row>
                <WeeklyVisitors />
                <CustomerRate />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xl="3" className=" col-xl-40">
          <Row>
            <DealCard />
            <ExpectedEarning />
            <Activities />
            <ProductDelivery />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ECommerceContainer;
