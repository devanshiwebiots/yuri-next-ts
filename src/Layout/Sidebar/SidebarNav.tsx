import { Pinned } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { SidebarItemType, SidebarMenuType } from "@/Types/Layout";
import { Fragment, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { menuList } from "../../Data/Layout/SidebarMenuList";
import { RootState } from "../../ReduxToolkit/Store";
import BackButton from "./BackButton";
import SidebarSubMenu from "./SidebarSubMenu";
import { useTranslation } from "react-i18next";

export default function SidebarNav({ sidebarMargin }: { sidebarMargin: number }) {
  const [activeMenu, setActiveMenu] = useState<SidebarItemType[]>([]);
  const { pinedMenu, sidebarSearchTerm } = useSelector((state: RootState) => state.layout);
  
  const { t } = useTranslation('translation');

  const filteredMenuList = useMemo(() => {
    if (!sidebarSearchTerm) return menuList;
    return menuList.map((mainMenu) => {
      const filteredSubMenu = mainMenu.menu.filter((submenu) => {
        if (submenu.title) {
          return submenu.title.toLowerCase().includes(sidebarSearchTerm.toLowerCase());
        }
        return false;
      });
      return {
        ...mainMenu,
        menu: filteredSubMenu,
      };
    });
  }, [sidebarSearchTerm]);
  
  const shouldHideMenu = (mainMenu: SidebarMenuType) => {
    return mainMenu.menu.map((data) => data.title).every((tittles) => pinedMenu.includes(tittles as string));
  };
  return (
    <ul className="sidebar-links simple-list custom-scrollbar" id="simple-bar">
      <div className="simplebar-wrapper">
        <div className="simplebar-mask">
          <div className="simplebar-offset">
            <div className="simplebar-content-wrapper">
              <div className="simplebar-content" style={{ marginLeft: sidebarMargin.toString() + "px" }}>
                <BackButton />
                <li className={`pin-title sidebar-main-title ${pinedMenu.length > 0 ? "show" : ""} `}>
                  <div>
                    <h6>{Pinned}</h6>
                  </div>
                </li>
                {filteredMenuList &&
                  filteredMenuList.map((mainMenu, i) => (
                    <Fragment key={i}>
                      <li className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? "d-none" : ""}`}>
                        <div>
                          <h6 className="lan-1">{t(mainMenu.title)}</h6>
                        </div>
                      </li>
                      <SidebarSubMenu menu={mainMenu.menu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={0} />
                    </Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
  );
}
