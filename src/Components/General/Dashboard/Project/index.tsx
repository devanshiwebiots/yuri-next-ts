import { Container, Row } from "reactstrap";
import ActiveProjects from "./ActiveProjects";
import AverageEarning from "./AverageEarning";
import ChatApplication from "./ChatApplication";
import DailyTask from "./DailyTask";
import ProjectCalendar from "./ProjectCalendar";
import ProjectEarning from "./ProjectEarning";
import ProjectOverviewDashboard from "./ProjectOverview";
import ProjectStatus from "./ProjectStatus";
import RecentProjectUpdate from "./RecentProjectUpdate";
import UserWelcomeCard from "./UserWelcomeCard";
import TotalClients from "./TotalClients";

const ProjectContainer = () => {
  return (
    <Container fluid className="dashboard3">
      <Row>
        <UserWelcomeCard />
        <ActiveProjects />
        <ProjectEarning />
        <TotalClients />
        <ProjectOverviewDashboard />
        <ProjectCalendar />
        <ProjectStatus />
        <ChatApplication />
        <RecentProjectUpdate />
        <AverageEarning />
        <DailyTask />
      </Row>
    </Container>
  );
};

export default ProjectContainer;
