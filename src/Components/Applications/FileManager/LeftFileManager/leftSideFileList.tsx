import { ContactUs, FREE, ImagePath, Premium, PricingPlan, Selected, Storage, TrialVersion } from "@/Constants";
import Image from "next/image";
import { Database, Grid } from "react-feather";
import { Button, Progress } from "reactstrap";

const LeftSideFileList = () => {
  return (
    <>
      <ul>
        <li>
          <Button tag={"div"} outline color="primary">
            <Database />
            {Storage}
          </Button>
          <div className="m-t-15">
            <Progress  color="primary"  className=" sm-progress-bar mb-1" value={25} />
            <h6>{"25 GB of 100 GB used"}</h6>
          </div>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <Button tag={"div"} outline color="primary">
            <Grid />
            {PricingPlan}
          </Button>
        </li>
        <li>
          <div className="pricing-plan">
            <h6>{TrialVersion} </h6>
            <h5>{FREE}</h5>
            <p>{"100 GB Space"}</p>
            <Button size="xs" color="primary" outline>
              {Selected}
            </Button>
            <Image className="bg-img" src={`${ImagePath}/dashboard/folder.png`} alt="" height={100} width={100} />
          </div>
        </li>
        <li>
          <div className="pricing-plan">
            <h6>{Premium}</h6>
            <h5>{"$5/month"}</h5>
            <p> {"200 GB Space"}</p>
            <Button size="xs" color="primary" outline>
              {ContactUs}
            </Button>
            <Image className="bg-img" src={`${ImagePath}/dashboard/folder1.png`} alt="" height={100} width={100} />
          </div>
        </li>
      </ul>
    </>
  );
};

export default LeftSideFileList;
