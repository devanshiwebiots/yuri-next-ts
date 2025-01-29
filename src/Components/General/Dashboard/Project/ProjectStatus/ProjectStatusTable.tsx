import { projectsStatusColumn, projectsStatusData } from "@/Data/General/Dashboard/Project";
import DataTable from "react-data-table-component";

const ProjectStatusTable = (props:any) => {
  return <DataTable data={projectsStatusData} columns={projectsStatusColumn} />;
};

export default ProjectStatusTable;
