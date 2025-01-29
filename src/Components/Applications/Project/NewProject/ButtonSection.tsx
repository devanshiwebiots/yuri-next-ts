import { Add, Cancel } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import Link from "next/link";
import { Button, Col, Row } from "reactstrap";

export const ButtonSection = () => {
  
  return (
    <Row>
      <Col>
        <div className="text-end">
          <Button type="submit" color="success" className="me-3">{Add}</Button>
          <Link href={`/applications/project/project-list`}>
            <Button color="danger">{Cancel}</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};
