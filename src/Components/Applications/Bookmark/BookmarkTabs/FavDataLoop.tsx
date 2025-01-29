import { useEffect } from "react";
import { Card, Col, Row } from "reactstrap";
import { Href, ImagePath } from "@/Constants";
import FavDescriptionData from "./FavDescriptionData";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { setBookMarkList, setBookmark } from "@/ReduxToolkit/Reducers/BookmarkTabSlice";
import { BookMarkData } from "@/Types/Bookmarks";
import Image from "next/image";
import SearchNotFoundClass from "../../Contacts/RightContactAside/Common/EmptyData";

const FavDataLoop = () => {
  const { bookmark, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updatedList = bookmark.filter((data) => data.fillStar === true);
    dispatch(setBookMarkList(updatedList));
  }, [bookmark, dispatch]);

  const removeFromFavorite = (item: BookMarkData) => {
    const updatedBookMark = bookmark.map((data) => (data.id === item.id ? { ...data, fillStar: false } : data));
    dispatch(setBookmark(updatedBookMark));
  };

  return (
    <Row>
      {bookMarkList.length > 0 ? (
        bookMarkList.map((myBookData: BookMarkData) => (
          <Col xxl="3" md="4" className="col-ed-4" key={myBookData.id}>
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <Image width={268} height={178} className="img-fluid" src={`${ImagePath}/${myBookData.image}`} alt="Image" />
                <div className={`favourite-icon favourite_0 ${myBookData.fillStar ? "favourite" : ""}`}>
                  <a href={Href}>
                    <i className="fa fa-star" onClick={() => removeFromFavorite(myBookData)}></i>
                  </a>
                </div>
                <FavDescriptionData myBookData={myBookData} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <SearchNotFoundClass title="Bookmark" />
      )}
    </Row>
  );
};
export default FavDataLoop;
