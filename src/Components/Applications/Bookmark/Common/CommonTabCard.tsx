import { CommonTabCardProp } from "@/Types/Bookmarks";
import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import SearchNotFoundClass from "../../Contacts/RightContactAside/Common/EmptyData";
import ViewBookmark from "../ViewBookmarks";

const CommonTabCard: React.FC<CommonTabCardProp> = ({ tabId, title }) => {
  return (
    <TabPane tabId={tabId}>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h4 className="mb-0">{title}</h4>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <SearchNotFoundClass word="Bookmark" />
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default CommonTabCard;
