import { PrivateEmailData } from "@/Data/LetterBox";
import { TabPane } from "reactstrap";
import PrivateEmailContent from "./PrivateEmailContent";

const PrivateContent = () => {
  return (
    <TabPane tabId="7">
      <div className="mail-body-wrapper">
        <ul>
          {PrivateEmailData.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <PrivateEmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default PrivateContent;
