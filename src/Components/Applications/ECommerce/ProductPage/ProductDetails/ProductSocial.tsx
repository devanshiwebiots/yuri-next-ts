import { ShareIt } from "@/Constants";
import { ProductSocialLinks } from "@/Data/Ecommerce";
import Link from "next/link";
import { Col, Form, Row } from "reactstrap";

export const ProductSocial = () => {
  return (
    <>
      <Row>
        <Col md="4">
          <h5 className="f-w-600 product-title">{ShareIt}</h5>
        </Col>
        <Col md="8">
          <div className="product-icon">
            <ul className="product-social">
              {ProductSocialLinks.map((item, index) => (
                <li className="d-inline-block" key={index}>
                  <Link href={item.link} target="_blank" >
                    <i className={`fa fa-${item.text}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
            <Form className="d-inline-block f-right"></Form>
          </div>
        </Col>
      </Row>
      <hr />
    </>
  );
};
