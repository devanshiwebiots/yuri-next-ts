import { Container, Row } from "reactstrap";
import ActiveProjects from "./ActiveProjects";
import ProjectEarnings from "./ProjectEarnings";
import TotalClients from "./TotalClients";
import SalesPipeline from "./SalesPipeline";
import RevenueChart from "./RevenueChart";
import GeneralCards from "./GeneralCards";
import EarningReports from "./EarningReports";
import ProjectOverview from "./ProjectOverview";
import Activities from "./Activities";
import ProductDelievery from "./ProductDelievery";
import TotalProfit from "./TotalProfit";
import WeeklyVisitor from "./WeeklyVisitor";

const GeneralWidgetsContainer = () => {
  return (
    <Container fluid className="main-widget">
      <Row>
        <ActiveProjects />
        <ProjectEarnings />
        <TotalClients />
        <SalesPipeline />
        <RevenueChart />
        <GeneralCards />
        <WeeklyVisitor />
        <EarningReports />
        <ProjectOverview />
        <Activities />
        <ProductDelievery />
        <TotalProfit />
      </Row>
    </Container>
  );
};

export default GeneralWidgetsContainer;
