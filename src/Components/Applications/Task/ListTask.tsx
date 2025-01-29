import { Documentation, Href, Print } from "@/Constants";
import { Printer } from "react-feather";
import { Card, CardHeader } from "reactstrap";
import CreatedByMe from "./CreatedByMe";

const ListOfTask = () => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h4 className="mb-0">{Documentation}</h4>
        <a href={Href} onClick={window.print} ><Printer className="me-2" />{Print}</a>
      </CardHeader>
      <CreatedByMe />
    </Card>
  );
};

export default ListOfTask;
