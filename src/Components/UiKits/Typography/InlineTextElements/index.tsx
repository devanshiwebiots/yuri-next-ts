import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonComponents/CommonCardHeader";
import { InlineTextElementsTitle } from "../../../../Constants";
import { inlineTextSubTitle } from "../../../../Data/UiKits/Typography";

const InlineTextElements = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="title-line">
        <CommonCardHeader
          title={InlineTextElementsTitle}
          subTitle={inlineTextSubTitle}
        />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <p className="mb-0">
              {"You can use the mark tag to"}
              <mark>{" highlight "}</mark>
              {"text"}
            </p>
            <p className="mb-0">
              <del>
                {"This line of text is meant to be treated as deleted text."}
              </del>
            </p>
            <p className="mb-0">
              <s>
                {
                  "This line of text is meant to be treated as no longer accurate."
                }
              </s>
            </p>
            <p className="mb-0">
              <ins>
                {
                  "This line of text is meant to be treated as an addition to the document."
                }
              </ins>
            </p>
            <p className="mb-0">
              <u>{"This line of text will render as underlined"}</u>{" "}
            </p>
            <p className="mb-0">
              <small>
                {"This line of text is meant to be treated as fine print."}
              </small>
            </p>
            <p className="mb-0">
              <strong>{"This line rendered as bold text."}</strong>
            </p>
            <p className="mb-0">
              <em>{"This line rendered as italicized text."}</em>
            </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineTextElements;
