import { Card, Col, Container, Row } from "reactstrap";
import DiscountCard from "./DiscountCard";
import MemberStatisticsCard from "./MemberStatictics";
import RecentOrders from "./RecentOrders";
import Revenue from "./Revenue";
import RevenueWidget from "./RevenueByIndutsry";
import SalesPipelineChart from "./SalesPipeline";
import SatisfactionRate from "./SatisfactionRate";
import TodoList from "./TodoList";
import TopReferral from "./TopReferral";
import TotalProfitCard from "./TotalProfit";
import TotalTransaction from "./TotalTransaction";
import UpcomingTransactionCard from "./UpcomingTransaction";
import UserCards from "./UserCards";
import WelcomeCard from "./WelcomeCard";
import EarningReports from "./EarningReports";

const DefaultContainer = () => {
  return (
    <Container fluid className="default-dashboard">
      <Row className="size-column">
        <Col xl="9" className=" col-xl-100 box-col-12">
          <Row>
            <WelcomeCard />
            <UserCards />
            <Col xl="6">
              <Row className="small-charts">
                <Revenue />
                <SalesPipelineChart />
                <SatisfactionRate />
                <RevenueWidget />
              </Row>
            </Col>
            <TotalProfitCard />
            <EarningReports />
            <UpcomingTransactionCard />
            <MemberStatisticsCard />
            <TopReferral />
          </Row>
        </Col>
        <Col xl="3" className="col-xl-100">
          <Card>
            <Row>
              <TotalTransaction />
              <RecentOrders />
              <DiscountCard />
              <TodoList />
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultContainer;
