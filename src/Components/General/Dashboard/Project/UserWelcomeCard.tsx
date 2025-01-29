import { HaveYouTried, ImagePath, UpgradePlan, UpgradeYourPlan } from "@/Constants";
import Image from "next/image";
import { Button, Card, CardBody, Col } from "reactstrap";

const UserWelcomeCard = () => {
  return (
    <Col xl="3" sm="6">
      <Card className="welcome-card">
        <CardBody>
          <h4 className="f-light f-w-500 mb-1">{HaveYouTried}</h4>
          <h2 className="mb-3">{UpgradeYourPlan}</h2>
          <Button color="primary" className="btn-hover-effect">
            {UpgradePlan}
          </Button>
        </CardBody>
        <div className="welcome-image">
          <Image height={156} width={163} className="img-fluid" src={`${ImagePath}/dashboard-3/1.png`} alt="upgrade" />
        </div>
      </Card>
    </Col>
  );
};

export default UserWelcomeCard;
