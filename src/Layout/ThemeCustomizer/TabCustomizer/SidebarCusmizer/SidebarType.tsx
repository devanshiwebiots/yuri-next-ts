import { SidebarTypeTitle } from "@/Constants";
import { addSidebarTypes } from "@/ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxToolkit/Store";
import CommenUL from "./Common/CommenUL";

export default function SidebarType() {
  const { sidebar_types } = useSelector((state: RootState) => state.themeCustomizer);
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();
  const handleSidebarType = (type: string) => {
    dispatch(addSidebarTypes(type));
  };

  //Horizontal sidebar will be disabled after screen size less than 992 px
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        document.getElementById("pageWrapper")?.classList.remove("horizontal-wrapper");
        document.getElementById("pageWrapper")?.classList.add("compact-wrapper");
      } else if (sidebar_types != "horizontal-wrapper") {
        document.getElementById("pageWrapper")?.classList.remove("horizontal-wrapper");
        document.getElementById("pageWrapper")?.classList.add("compact-wrapper");
      } else {
        document.getElementById("pageWrapper")?.classList.add("horizontal-wrapper");
        document.getElementById("pageWrapper")?.classList.remove("compact-wrapper");
      }
    });
  }, [sidebar_types]);

  // useEffect(() => {
  //   if (window.innerWidth <= 1199) {
  //     console.log('aefsrgsdrgdsrd')
  //     window.addEventListener("resize", () => {
  //       if (window.innerWidth <= 1199) {
  //         // console.log('aefsrgsdrgdsrd')
  //         document.getElementById("sidebar-wrapper")?.classList.add("close_icon");
  //         document.getElementById("page-header")?.classList.add("close_icon");
  //       }
  //     });
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log('i am entered in pussy');

  //   const handleResize = () => {
  //     console.log('i am licking pussy');
  //     if (window.innerWidth <= 1199) {
  //       console.log('i am licking pussy by applying sendha namak');
  //       document.getElementById("sidebar-wrapper")?.classList.add("close_icon");
  //       document.getElementById("page-header")?.classList.add("close_icon");
  //     }
  //   };

  //   // handleResize(); // Initial check
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);



  // Sidebar will not show ui below screen size less than 992 px
  useEffect(() => {
    if (sideBarToggle != "close_icon") {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 1200) {
          document.getElementById("sidebar-wrapper")?.classList?.add("close_icon");
          document.getElementById("page-header")?.classList?.add("close_icon");
        }
        //  else if (window.innerWidth < 992) {
        //   document.getElementById("sidebar-wrapper")?.classList.add("close_icon");
        //   document.getElementById("page-header")?.classList.add("close_icon");
        // }
        else {
          document.getElementById("sidebar-wrapper")?.classList?.remove("close_icon");
          document.getElementById("page-header")?.classList?.remove("close_icon");
        }
      });
    }
  }, []);

  return (
    <>
      <h6>{SidebarTypeTitle}</h6>
      <ul className="sidebar-type layout-grid simple-list flex-row d-flex gap-2">
        <li data-attr="normal-sidebar" className={sidebar_types === "horizontal-wrapper" ? "active" : ""} onClick={() => handleSidebarType("horizontal-wrapper")}>
          <div className="header bg-light">
            <CommenUL />
          </div>
          <div className="body">
            <ul className="simple-list">
              <li className="bg-dark sidebar"></li>
              <li className="bg-light body"></li>
            </ul>
          </div>
        </li>
        <li data-attr="compact-sidebar" className={sidebar_types === "compact-wrapper" ? "active" : ""} onClick={() => handleSidebarType("compact-wrapper")}>
          <div className="header bg-light">
            <CommenUL />
          </div>
          <div className="body">
            <ul className="simple-list flex-row">
              <li className="bg-dark sidebar compact"></li>
              <li className="bg-light body"></li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
}
