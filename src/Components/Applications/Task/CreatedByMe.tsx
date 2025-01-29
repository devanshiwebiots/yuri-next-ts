import { Link, MoreHorizontal, Trash2 } from "react-feather";
import { CardBody, Table } from "reactstrap";
import SweetAlert from "sweetalert2";
import { Href } from "@/Constants";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { removeTask } from "@/ReduxToolkit/Reducers/TaskSlice";

const CreatedByMe = () => {
  const { allTask } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const deleteTask = (userId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(removeTask(userId));
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <CardBody className="p-0" >
      <div className="taskadd">
        <div className="table-responsive custom-scrollbar">
          <Table>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {allTask && allTask.length ? (
                allTask.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <h6 className="task_title_0 f-w-600">{data.title}</h6>
                      <p className="project_name_0">{data.collection}</p>
                    </td>
                    <td><p className="task_desc_0">{data.description}</p></td>
                    <td>
                      <a className="me-2" href={Href}><Link /></a>
                      <a href={Href}><MoreHorizontal /></a>
                    </td>
                    <td>
                      <a href={Href} onClick={() => deleteTask(data.id)}><Trash2 /></a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <div className="no-favourite">
                      <span>No Tasks Found</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </CardBody>
  );
};

export default CreatedByMe;
