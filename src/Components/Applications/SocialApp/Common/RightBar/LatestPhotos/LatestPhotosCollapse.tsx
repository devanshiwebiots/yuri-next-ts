import { ImagePath } from "@/Constants";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import Image from "next/image";
import { CardBody, Collapse } from "reactstrap";

const LatestPhotosCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="photos filter-cards-view">
        <ul className="common-flex latest-photos">
          {[...Array(8)].map((data, index) => (
            <li key={index}>
                <img className="img-fluid" alt="user" src={`${ImagePath}/social-app/post-${index+1}.png`}/>
            </li>
          ))}
        </ul>
      </CardBody>
    </Collapse>
  );
};
export default LatestPhotosCollapse;
