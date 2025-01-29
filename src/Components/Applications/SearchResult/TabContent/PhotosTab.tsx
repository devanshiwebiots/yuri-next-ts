import { DescriptionMyGallery } from "@/Components/Gallery/GalleryDridDesc/DescriptionMyGallery";
import { ImageAbout } from "@/Constants";
import { Row } from "reactstrap";
import PagesSort from "./Pages";

const PhotosTab = () => {
  return (
    <>
      <h6 className="mb-2">{ImageAbout}</h6>
      <Row className="my-gallery gallery-with-description">
        <DescriptionMyGallery />
      </Row>
      <PagesSort pageClass="start" />
    </>
  );
};

export default PhotosTab;
