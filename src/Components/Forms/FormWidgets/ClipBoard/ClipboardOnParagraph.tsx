//@ts-nocheck
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ClipboardOnParagraphs, Copy, CopyFromParagraph } from "@/Constants";
import { ClipBoardParaGraph } from "@/Data/Forms";
import { useState } from "react";
// import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col } from "reactstrap";

const ClipboardOnParagraph = () => {
  const [clipBoardValues, setClipBoardValues] = useState({ value: ClipBoardParaGraph, copied: false });

  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={ClipboardOnParagraphs} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">{CopyFromParagraph}</p>
            {/* <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
              <h6 className="border rounded p-3 f-w-300">{ClipBoardParaGraph}</h6>
            </CopyToClipboard> */}
            <div className="mt-3 text-end">
              {/* <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                <Button className="btn-clipboard" color="info">
                  <i className="fa fa-copy"></i> {Copy}
                </Button>
              </CopyToClipboard> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClipboardOnParagraph;
