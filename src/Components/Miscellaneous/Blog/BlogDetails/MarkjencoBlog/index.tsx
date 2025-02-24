import { Card, Col } from "reactstrap";
import MarkjencoBlogDetails from "./MarkjencoBlogDetails";
import Image from "next/image";
import { ImagePath } from "@/Constants";

const MarkjencoBlog = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      <Card>
        <div className="blog-box blog-shadow">
          <img className="img-fluid" src={`${ImagePath}/blog/blog.jpg`} alt="blog image" />
          <MarkjencoBlogDetails />
        </div>
      </Card>
    </Col>
  );
};

export default MarkjencoBlog; 
