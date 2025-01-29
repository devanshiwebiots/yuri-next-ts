import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { Favourites } from "@/Constants";
import FavDataLoop from "./FavDataLoop";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import ViewBookmark from "../ViewBookmarks";

const FavDataTab = () => {
  const { gridView } = useAppSelector((state)=>state.bookmarkTab)
  return (
    <TabPane tabId="2">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h4 className="mb-0">{Favourites}</h4>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
            <FavDataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default FavDataTab;
