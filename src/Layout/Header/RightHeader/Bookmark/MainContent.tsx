import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { useRouter } from "next/navigation";
import { Col, Row } from "reactstrap";

export const MainContent = () => {
  const { bookmarkedData } = useAppSelector((store) => store.bookmarkDataSlice);
  const router = useRouter();
  
  return (
    <Row className="custom-scrollbar">
      {bookmarkedData.map((item, i) => (
        <Col key={i} xs="4" className=" text-center">
          <div className="bookmark-content" onClick={() => router.push(`${item.pathName}`)}>
            <div className="bookmark-icon">
              <SvgIcon iconId={`stroke-${item.icon}`} />
            </div>
            {item.name || item.title}
          </div>
        </Col>
      ))}
    </Row>
  );
};
