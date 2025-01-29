import { Href } from "@/Constants";
import { CommonUserData } from "@/Data/Users";
import { CommonUserFooterType } from "@/Types/Users";
import CountUp from "react-countup";
import { Label, List, ListInlineItem } from "reactstrap";

const CommonUserFooter: React.FC<CommonUserFooterType> = ({ listClass }) => {
  return (
    <div className={`"mt-3 like-comment  ${listClass ? listClass : ""}`}>
      <List type="inline" className="justify-content-start mt-2">
        {CommonUserData.map((item, index) => (
          <ListInlineItem className={item.listClass} key={index}>
            <Label className="m-0">
              <a href={Href}>
                <i className={`fa fa-${item.icon}`}></i>
              </a>
              {item.text}
            </Label>
            <CountUp end={item.count} className="ms-2" delay={1} />
          </ListInlineItem>
        ))}
      </List>
    </div>
  );
};

export default CommonUserFooter;
