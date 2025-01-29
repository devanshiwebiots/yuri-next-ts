import { ImagePath } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarToggle } from "../../ReduxToolkit/Reducers/Layout/LayoutReducer";
import { RootState } from "../../ReduxToolkit/Store";

export default function LogoWrapper() {
  
  const dispatch = useDispatch();
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);
  const handleSidebarToggle = () => {
    if (sideBarToggle == "close_icon") {
      dispatch(setSideBarToggle(""));
    } else if (sideBarToggle == "") {
      dispatch(setSideBarToggle("close_icon"));
    }
  };
  const closeSideBar = () => {
    dispatch(setSideBarToggle("close_icon"));
  };
  return (
    <div className="logo-wrapper">
      <Link href={`/dashboard/default`}>
        <Image height={30} width={102} className="img-fluid" src={`${ImagePath}/logo/logo_dark.png`} alt="" />
      </Link>
      <div className="back-btn" onClick={closeSideBar}>
        <i className="fa fa-angle-left"></i>
      </div>
      <div className="toggle-sidebar" onClick={handleSidebarToggle}>
        <Grid className="status_toggle middle sidebar-toggle" />
      </div>
    </div>
  );
}
