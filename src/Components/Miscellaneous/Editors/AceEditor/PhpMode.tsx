import { Card, CardBody, Col } from "reactstrap";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/ext-language_tools";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { phpData } from "@/Data/Miscellaneous/Editors";
import { PhpModeTitle } from "@/Constants";

const PhpMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={PhpModeTitle} />
        <CardBody>
          {/* <AceEditor
            className="aceEditor w-auto"
            mode="php"
            theme="monokai"
            value={phpData}
            name="blah2"
            fontSize={14}
            setOptions={{ useWorker: false }}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
          /> */}
        </CardBody>
      </Card>
    </Col>
  );
};
export default PhpMode;
