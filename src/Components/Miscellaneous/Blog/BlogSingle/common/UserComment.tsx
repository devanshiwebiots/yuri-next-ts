import { ImagePath } from "@/Constants";
import { UserCommentPropsType } from "@/Types/Blog";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import { ChildUserComment } from "../ChildUserComment";

const UserComment: React.FC<UserCommentPropsType> = ({ ImageSrc, userReplay, text }) => {

  return (
    <>
      
       
          <li>
            <div className="d-flex align-self-center">
              <Image width={75} height={74} className="align-self-center" src={`${ImagePath}/blog/${ImageSrc}`} alt="Generic placeholder" />
              <div className="flex-grow-1">
                <Row>
                  <Col md="4">
                    <h4 className="blog-title mt-0">Jolio Mark<span> ( Designer )</span></h4>
                  </Col>
                  <Col md="8">
                    <ul className="comment-social float-start float-md-end">
                      <li><i className="icofont icofont-thumbs-up"></i>02 Hits</li>
                      <li><i className="icofont icofont-ui-chat"></i>598 Comments</li>
                    </ul>
                  </Col>
                </Row>
                <p>{text}</p>
              </div>
            </div>
          </li>
     
      {userReplay && <ChildUserComment/>}
    </>
  );
};

export default UserComment;
