import { MAINTENANCE } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import Link from "next/link";
import { Button, Container } from "reactstrap";

export default function Maintenance() {
  
  return (
    <div className="page-wrapper">
      <div className="error-wrapper maintenance-bg">
        <Container>
          <ul className="simple-list maintenance-icons">
            <li>
              <i className="fa fa-cog"></i>
            </li>
            <li>
              <i className="fa fa-cog"></i>
            </li>
            <li>
              <i className="fa fa-cog"></i>
            </li>
          </ul>
          <div className="maintenance-heading">
            <h2 className="headline">{MAINTENANCE}</h2>
          </div>
          <h4 className="sub-content">
            {"Our Site is Currently under maintenance We will be back Shortly"}
            <br />
            {"Thank You For Patience"}
          </h4>
          <Link href={`/dashboard/default`}>
            <Button color="primary-gradien" size="lg" className="text-light">
              {"BACK TO HOME PAGE"}
            </Button>
          </Link>
        </Container>
      </div>
    </div>
  );
}
