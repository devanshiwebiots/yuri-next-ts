import React from "react";
import { Button, Col } from "reactstrap";

export default function Invoice6Button({ handlePrint }: { handlePrint: VoidFunction }) {
  return (
    <Col sm={12} className="text-center mt-3">
      <Button color="primary" className="me-2" onClick={handlePrint}>
        {"Print"}
      </Button>
      <Button color="secondary">{"Cancel"}</Button>
    </Col>
  );
}
