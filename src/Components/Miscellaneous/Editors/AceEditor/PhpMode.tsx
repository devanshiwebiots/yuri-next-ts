import { Card, CardBody, Col } from "reactstrap";
import { Highlight, themes } from "prism-react-renderer";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { typeScriptData } from "@/Data/Miscellaneous/Editors";
import { JavaModeTitle } from "@/Constants";

const PhpMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={JavaModeTitle} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={typeScriptData} language="HTML">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PhpMode;
