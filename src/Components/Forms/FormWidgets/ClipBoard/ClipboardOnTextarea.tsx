import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ClipboardOnTextareas, Copy, Cut, CutCopyFromTextarea } from "@/Constants";
import { clipBoardTextParagraph } from "@/Data/Forms";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col, Input } from "reactstrap";

const ClipboardOnTextarea = () => {
    const clipBoardTextParagraph: string = "A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.";
    const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardTextParagraph, copied: false });
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(clipBoardValues.value);
        setClipBoardValues({ value: clipBoardValues.value, copied: true });
      } catch (err) {
        toast.error("Failed to copy text: " + err);
      }
    };

    const handleCut = async () => {
      try {
        await navigator.clipboard.writeText(clipBoardValues.value);
        setClipBoardValues({ value: "", copied: false });
      } catch (err) {
        toast.error("Failed to cut text: " + err);
      }
    };

  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={ClipboardOnTextareas} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">{CutCopyFromTextarea}</p>
            <Input type="textarea" rows={1} spellCheck="false" value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
            <div className="mt-3 text-end">
                <Button className="btn-clipboard me-2" color="warning" onClick={handleCopy}>
                  <i className="fa fa-copy"></i>
                  {Copy}
                </Button>
                <Button className="btn-clipboard-cut" color="success" onClick={handleCut}>
                  <i className="fa fa-cut"></i>
                  {Cut}
                </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClipboardOnTextarea;
