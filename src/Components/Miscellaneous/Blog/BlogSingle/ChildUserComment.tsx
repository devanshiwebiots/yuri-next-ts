import { ImagePath } from "@/Constants";
import { SingleBlogParagraphs } from "@/Data/Miscellaneous/Blog";
import Image from "next/image";
import { Col, Row } from "reactstrap";

export const ChildUserComment = () => {
  return (
    <li>
      <ul>
        <li>
          <div className="d-flex">
            <Image width={75} height={74} className="align-self-center" src={`${ImagePath}/blog/9.jpg`} alt="Generic placeholder image" />
            <div className="flex-grow-1">
              <Row>
                <Col xl="12">
                  <h4 className="blog-title mt-0">
                    JolioMark<span> ( Designer )</span>
                  </h4>
                </Col>
              </Row>
              <p>{SingleBlogParagraphs}</p>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};
