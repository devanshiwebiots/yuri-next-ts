import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { setIsSearchBarOpen, setSearchClass } from "../../../ReduxToolkit/Reducers/Layout/LayoutReducer";
import { RootState } from "../../../ReduxToolkit/Store";
import HeaderBookmark from "./Bookmark";
import CartHeader from "./CartHeader";
import ChatHeader from "./ChatHeader";
import MaximizeScreen from "./MaximizeScreen";
import MoonLight from "./MoonLight";
import NotificationBox from "./NotificationBox";
import ProfileHeader from "./ProfileHeader";

const RightHeader = () => {
  const dispatch = useDispatch();
  const { isSearchBarOpen, searchClass } = useSelector((state: RootState) => state.layout);
  const handleSearch = () => {
    dispatch(setSearchClass(!searchClass));
    dispatch(setIsSearchBarOpen(!isSearchBarOpen));
  };

  return (
    <ul className="nav-menus simple-list flex-row">
      <li>
        <span className="header-search">
          <SvgIcon onClick={handleSearch} iconId="search" />
        </span>
      </li>
      <MaximizeScreen />
      <NotificationBox />
      <HeaderBookmark />
      <ChatHeader />
      <MoonLight />
      <CartHeader />
      <ProfileHeader />
    </ul>
  );
};

export default RightHeader;
