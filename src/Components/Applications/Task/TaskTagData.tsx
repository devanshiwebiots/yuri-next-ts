import { Href } from "@/Constants";
import { TaskTagDataList } from "@/Data/Task";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { setActiveTab } from "@/ReduxToolkit/Reducers/TaskSlice";
import { NavClassType } from "@/Types/TaskType";
import { NavItem } from "reactstrap";

export const TaskTagData :React.FC<NavClassType> = ({ activeToggle }) => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.task);
  const tabHandler = (tab: string) => {
    dispatch(setActiveTab(tab));
    activeToggle(tab);
  };

  return (
    <>
      {TaskTagDataList.map((item) => (
        <NavItem key={item.id}>
          <a href={Href} className={activeTab === item.activeTab ? "show" : ""} onClick={() => tabHandler(item.activeTab)}>
            <span className="title"> {item.title}</span>
          </a>
        </NavItem>
      ))}
    </>
  );
};
