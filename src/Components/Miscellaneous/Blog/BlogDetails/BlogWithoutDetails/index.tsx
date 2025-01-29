import { Card, Col } from "reactstrap";
import ListOfBlogWithoutDetails from "./ListOfBlogWithoutDetails";
import Image from "next/image";
import { ImagePath } from "@/Constants";
import { BlodDataList } from "@/Data/Miscellaneous/Blog";

const BlogWithoutDetails = () => {
  return (
    <>
      {BlodDataList.map((data, index) => (
        <Col md="6" xxl="3" className="box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <img className="img-fluid top-radius-blog rounded-top-3" src={`${ImagePath}/blog/${data}`} alt="blog" />
              <ListOfBlogWithoutDetails />
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogWithoutDetails;
