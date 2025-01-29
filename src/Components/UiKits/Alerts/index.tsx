import { Container, Row } from "reactstrap";
import AdditionalContent from "./AdditionalContent";
import DismissingDarkAlerts from "./DismissingDarkAlert";
import DismissingLightAlerts from "./DismissingLightAlert";
import LeftBorderAlert from "./LeftBorderAlerts";
import LinkDarkAlerts from "./LinkDarkAlerts";
import LinkLightAlerts from "./LinkLightAlerts";
import LiveAlert from "./LiveAlerts";
import OutlineAlerts from "./OutlineAlerts";
import AlertsWithIconsandTextActions from "./WithIconAlerts";

const AlertsContainer = () => {
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  return (
    <Container fluid>
      <Row>
        <LinkDarkAlerts />
        <LinkLightAlerts />
        <OutlineAlerts />
        <AlertsWithIconsandTextActions />
        <DismissingDarkAlerts />
        <DismissingLightAlerts />
        <LiveAlert />
        <LeftBorderAlert />
        <AdditionalContent />
      </Row>
    </Container>
  );
};

export default AlertsContainer;
