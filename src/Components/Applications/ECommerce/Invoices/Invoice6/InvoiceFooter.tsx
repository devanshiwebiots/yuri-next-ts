import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Col, Form, Row } from "reactstrap";

export default function InvoiceFooter() {
  return (
    <Row>
      <Col md={8}>
        <div>
          <p className="legal">
            <strong>{"Thank you for your business!"}</strong>
            {" Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices."}
          </p>
        </div>
      </Col>
      <Col md={4}>
        <Form className="text-end">
          <Image className="h-auto w-auto" height={100} width={100} src={`${ImagePath}/other-images/paypal.png`} alt="PayPal" />
        </Form>
      </Col>
    </Row>
  );
}
