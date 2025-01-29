import { AddFriend, ImagePath } from "@/Constants";
import { PeopleKnowData } from "@/Data/SocialApp";
import { PeopleYouMayKnowProp } from "@/Types/SocialAppType";
import Image from "next/image";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";

const PeopleYouMayKnow :React.FC<PeopleYouMayKnowProp> = ({heading}) => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader><h5>{heading}</h5></CardHeader>
        <CardBody className="avatar-showcase">
          <div className="pepole-knows">
            <ul className="flex-wrap">
              {PeopleKnowData.map((data, index) => (
                <li key={index}>
                  <div className="add-friend text-center">
                    <Image height={50} width={50} className="img-60 img-fluid rounded-circle" alt="user" src={`${ImagePath}/${data.peopleImageName}`} />
                    <span className="d-block f-w-600">{data.peopleName}</span>
                    <Button color="primary" size="xs">{AddFriend}</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PeopleYouMayKnow;
