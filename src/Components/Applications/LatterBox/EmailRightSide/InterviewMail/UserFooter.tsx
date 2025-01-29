import SVG from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { ImagePath } from "@/Constants";
import { mdeEditorText } from "@/Data/LetterBox";
import Image from "next/image";
import DownloadLink from "react-download-link";
import SimpleMdeReact from "react-simplemde-editor";

const UserFooter = () => {
  return (
    <div className="user-footer">
      <div>
        <SVG iconId="attchment" />
        <span className="f-light">{"Attachments"}</span>
      </div>
      <div className="d-inline-block">
        <div className="attchment-file common-flex">
          <div className="common-flex align-items-center">
            <Image width={30} height={36} src={`${ImagePath}/email-template/pdfs.png`} alt="pdf" />
            <div className="d-block">
              <p>Offer_Letter.pdf</p>
              <p>200KB</p>
            </div>
          </div>
          <DownloadLink filename="myfile.txt" label={<i className="fa fa-download f-light"></i>} />
        </div>
      </div>
      <div className="toolbar-box">
        <div id="editor">
          <SimpleMdeReact id="editor_container" value={mdeEditorText} options={{ autofocus: true, spellChecker: false }} />
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
