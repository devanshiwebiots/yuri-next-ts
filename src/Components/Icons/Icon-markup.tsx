// @ts-nocheck
import { CopyText } from "@/Constants";
import { toast } from "react-toastify";
import { Button, Container, FormGroup, Input, Row } from "reactstrap";

const IconMarkUp = ({ icons, itag }) => {
  const featherIcons = require("feather-icons");
  const closeIcon = document.getElementsByClassName("icon-hover-bottom") as HTMLCollectionOf<HTMLElement>;

   const handleCopy = async () => {
     await navigator.clipboard.writeText(itag.iTag);
     toast.info("Code Copied to clipboard !", { position: "bottom-right", theme: "colored" });
   };

  const closeIconContainer = () => (closeIcon[0].style.display = "none");
  if (itag !== "" && icons !== "") closeIcon[0].style.display = "block";

  return (
    <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div">
      <Container fluid>
        <Row>
          <div className="icon-popup">
            <div className="close-icon" onClick={() => closeIconContainer()}>
              <i className="icofont icofont-close"></i>
            </div>
            <div className="icon-first">{icons.feathericon ? <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icons.feathericon].toSvg(icons.feathericon) }} /> : <i id="icon_main" className={icons.icon}></i>}</div>
            <div className="icon-class">
              <label className="icon-title mb-2">Class</label>
              <span id="fclass1" className="">
                {icons.feathericon ? itag.iTag.slice(17, itag.iTag.indexOf('"></i>')) : itag.iTag && itag.iTag.slice(14, itag.iTag.indexOf('"></i>'))}
              </span>
            </div>
            <div className="icon-last icon-last">
              <label className="icon-title">Markup</label>
              <div className="form-inline">
                <FormGroup tag={"div"} className=" form-group">
                  <Input className="inp-val m-r-10" id="input_copy" type="text" defaultValue={itag.iTag} />
                    <Button color="primary" className="notification" onClick={handleCopy}>
                      {CopyText}
                    </Button>
                </FormGroup>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default IconMarkUp;
