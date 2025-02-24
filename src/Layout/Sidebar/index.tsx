import { menuList } from "@/Data/Layout/SidebarMenuList";
import { useAppDispatch } from "@/ReduxToolkit/Hooks";
import { getLinkItemsArray } from "@/ReduxToolkit/Reducers/BookmarkDataSlice";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxToolkit/Store";
import LogoIconWrapper from "./LogoIconWrapper";
import LogoWrapper from "./LogoWrapper";
import ProfileSection from "./ProfileSection";
import SidebarNav from "./SidebarNav";
import SidebarSearch from "./SidebarSearch";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const [sidebarMargin, setSidebarMargin] = useState(0);
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);

  useEffect(() => {
    let num = 0;
    const tempt: any = [];
    const getAllLink = (item: any, icon: JSX.Element | undefined) => {
      if (item.length > 0) {
        item.map((ele: any) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        tempt.push({ name: item.title, pathName: item.url, icon: icon, bookmarked: false, id: num });
      }
    };
    menuList.map((item, index) => {
      item.menu.map((menu: any) => {
        getAllLink(menu.subMenu ? menu.subMenu : menu, menu.icon);

      });
    });
    dispatch(getLinkItemsArray(tempt));
  }, []);

  return (
    <div className={`sidebar-wrapper ${sideBarToggle}`} id='sidebar-wrapper' data-sidebar-layout="stroke-svg">
      <div>
        <LogoWrapper />
        <LogoIconWrapper />
        <ProfileSection />
        <SidebarSearch />
        <nav className="sidebar-main">
          <div className={`left-arrow ${sidebarMargin == 0 && "disabled"} `} id="left-arrow" onClick={() => setSidebarMargin(sidebarMargin + 700)}>
            <ArrowLeft />
          </div>
          <div id="sidebar-menu">
            <SidebarNav sidebarMargin={sidebarMargin} />
          </div>
          <div className={`right-arrow ${sidebarMargin <= -2800 && "disabled"}`} onClick={() => setSidebarMargin(sidebarMargin - 700)} id="right-arrow">
            <ArrowRight />
          </div>
        </nav>
      </div>
    </div>
  );
}
