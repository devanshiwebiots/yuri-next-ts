import { Cancel, ConfigurationTitle, CopyTextButton } from "@/Constants";
import { ConfigurationProps } from "@/Types/Layout";
// import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import ConfigDB from "../../../../Config/ThemeConfig";
import ConfigurationContent from "./ConfigurationContent";

export default function Configuration({ modal, toggle }: ConfigurationProps) {
  const handleCopy = () => {
    toast.success("Code Copied to clipboard !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  return (
    <Modal isOpen={modal} toggle={toggle} className="modal-body" centered={true}>
      <ModalHeader toggle={toggle}>{ConfigurationTitle}</ModalHeader>
      <ModalBody>
        <Container fluid={true} className="bd-example-row">
          <Row>
            <p>{"To replace our design with your desired theme. Please do configuration as mention"}</p>
            <p>
              <b> {"Path : src > Config > ThemeConfig.jsx "}</b>
            </p>
          </Row>
          <ConfigurationContent />
        </Container>
      </ModalBody>
      <ModalFooter>
        {/* <CopyToClipboard text={JSON.stringify(ConfigDB)}>
          <Button color="primary" className="notification" onClick={handleCopy}>
            {CopyTextButton}
          </Button>
        </CopyToClipboard> */}
        <Button color="secondary" onClick={toggle}>
          {Cancel}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
