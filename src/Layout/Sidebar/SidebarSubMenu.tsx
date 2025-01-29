import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import ConfigDB from "@/Config/ThemeConfig";
import { Href } from "@/Constants";
import { MenuListType, SidebarItemType } from "@/Types/Layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "reactstrap";
import { setPinedMenu } from "../../ReduxToolkit/Reducers/Layout/LayoutReducer";
import { RootState } from "../../ReduxToolkit/Store";

export default function SidebarSubMenu({ menu, setActiveMenu, activeMenu, level }: MenuListType) {
  const layout = ConfigDB.settings.sidebar.type;
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { pinedMenu } = useSelector((state: RootState) => state.layout);

  const handlePined = (value: string) => {
    if (!pinedMenu.includes(value)) {
      dispatch(setPinedMenu([...pinedMenu, value]));
    } else {
      let filterMenu = pinedMenu.filter((item) => item !== value);
      dispatch(setPinedMenu(filterMenu));
    }
  };

  const ActiveNavLinkUrl = (path?: string, active?: boolean) => {
    return pathname === path ? (active ? active : true) : "";
  };
  function shouldSetActive({ item }: { item: SidebarItemType }): boolean {
    var returnValue = false;
    if (item?.url === pathname) {
      returnValue = true;
    }
    if (!returnValue && item?.subMenu) {
      item?.subMenu.every((subItem: SidebarItemType) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  }
  useEffect(() => {
    menu.forEach((item) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
  }, []);

  return (
    <>
      {menu.map((item, i) => (
        <li key={i} className={`${level === 0 ? "sidebar-list" : ""} ${item.title && pinedMenu.includes(item.title) ? "pined" : ""} ${(item.subMenu ? item.subMenu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || ""} `}>
          {level === 0 && <i className='fa fa-thumb-tack' onClick={() => item.title && handlePined(item.title)}></i>}
          {item.badge ? <Badge color={item.badgeColor}>{item.badgeName}</Badge> : ""}
          <Link
            className={`${level === 0 ? "sidebar-link sidebar-title" : ""} ${(item.subMenu ? item.subMenu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "active" : ""}`}
            href={item.url ? item.url : Href}
            onClick={() => {
              const temp = activeMenu;
              temp[level] = temp[level] !== item.title && item.title;
              setActiveMenu([...temp]);
            }}
          >
            {item.icon && <SvgIcon className='stroke-icon' iconId={`stroke-${item.icon}`} />}
            {level === 0 ? <span className='lan-3'>{`${t(item.title)}`}</span> : `${t(item.title)}`}
            {item.subMenu && (
              <>
                {layout === "compact-wrapper" && <div className='according-menu'>{activeMenu[level] === item.title ? <i className='fa fa-angle-down' /> : <i className='fa fa-angle-right' />}</div>}
                {layout === "horizontal-wrapper" && <span className='sub-arrow arrow-none'>{activeMenu[level] === item.title ? <i className='fa fa-angle-right' /> : <i className='fa fa-angle-right' />}</span>}
              </>
            )}
          </Link>
          {item.subMenu && (
            <ul
              className={`${level / 2 === 0 ? "sidebar-submenu" : "nav-sub-childmenu submenu-content"}`}
              style={{
                display: `${(item.subMenu ? item.subMenu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "block" : "none"}`,
              }}
            >
              <SidebarSubMenu menu={item.subMenu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={level + 1} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
