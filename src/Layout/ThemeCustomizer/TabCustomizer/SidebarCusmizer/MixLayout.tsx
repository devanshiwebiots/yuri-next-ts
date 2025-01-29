import { MixLayoutTitle } from "@/Constants";
import { mixLayoutData } from "@/Data/ThemeCustomizer";
import { addSideBarBackGround } from "@/ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer";
import { useDispatch } from "react-redux";
import CommenUL from "./Common/CommenUL";

export default function MixLayout() {
  const dispatch = useDispatch();
  const handleMixLayout = (data: string) => {
    dispatch(addSideBarBackGround(data));
    document.body.className = data;
  };

  return (
    <>
      <h6>{MixLayoutTitle}</h6>
      <ul className="simple-list flex-row layout-grid customizer-mix d-flex gap-2">
        {mixLayoutData.map((layout, index) => (
          <li key={index} className={`color-layout`} data-attr={layout.value} onClick={() => handleMixLayout(layout.value)}>
            <div className={`header ${layout.headerClass}`}>
              <CommenUL />
            </div>
            <div className="body">
              <ul className="simple-list flex-row">
                <li className={`sidebar ${layout.sidebarClass}`}></li>
                <li className={`body ${layout.bodyClass}`}></li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
