import SVG from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { Inbox } from "@/Constants";
import { LetterBoxSidebar } from "@/Data/LetterBox";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { LetterBoxNavType } from "@/Types/LetterBox";
import { Badge, Nav, NavItem, NavLink } from "reactstrap";
import AddLabel from "./AddLabel";

const EmailNavMenu: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const { inboxEmail } = useAppSelector((state) => state.letterBox)
  let starBadges = inboxEmail.filter((data) => data.star === true && 1)

  return (
    <Nav pills tabs className="main-menu email-category border-0">
      {LetterBoxSidebar.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={`border-0 ${navId === data.id ? "active" : ""}`} onClick={() => setNavId(data.id)}>
            <SVG className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
            <div>
              {data.title}
              {data.badge && <Badge color="light-primary">{data.title === Inbox ? inboxEmail.length : starBadges.length}</Badge>}
            </div>
          </NavLink>
        </NavItem>
      ))}
      <AddLabel />
    </Nav>
  );
};

export default EmailNavMenu;
