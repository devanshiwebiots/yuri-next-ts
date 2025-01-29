//@ts-nocheck
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ClipboardOnTextareas, Copy, Cut, CutCopyFromTextarea } from "@/Constants";
import { clipBoardTextParagraph } from "@/Data/Forms";
import { useState } from "react";
// import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col, Input } from "reactstrap";

const ClipboardOnTextarea = () => {
  const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardTextParagraph, copied: false });

  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={ClipboardOnTextareas} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">{CutCopyFromTextarea}</p>
            <Input type="textarea" rows={1} spellCheck="false" value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
            <div className="mt-3 text-end">
              {/* <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                <Button className="btn-clipboard me-2" color="warning">
                  <i className="fa fa-copy"></i>
                  {Copy}
                </Button>
              </CopyToClipboard>
              <CopyToClipboard text={clipBoardValues.value} onCopy={() => setClipBoardValues({ copied: true, value: "" })}>
                <Button className="btn-clipboard-cut" color="success">
                  <i className="fa fa-cut"></i>
                  {Cut}
                </Button>
              </CopyToClipboard> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClipboardOnTextarea;
