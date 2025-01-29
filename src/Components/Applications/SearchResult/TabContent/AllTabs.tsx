import { Col, Row } from "reactstrap";
import { SearchPixelStrap } from "@/Constants";
import SearchBanner from "./SearchBanner";
import InformationCommon from "./common/InformationCommon";
import PagesSort from "./Pages";
import { SearchTabData } from "@/Data/SearchResult";

const AllTabs = () => {
  return (
    <Row>
      <Col xxl="8" xl="6" className="box-col-12">
        <h6 className="mb-2">{SearchPixelStrap}</h6>
        {SearchTabData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <SearchBanner />
      <PagesSort pageClass="end" />
    </Row>
  );
};
export default AllTabs;
