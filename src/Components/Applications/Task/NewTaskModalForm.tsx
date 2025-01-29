import { Cancel, Save, SubTask, TaskTitle } from "@/Constants";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { addNewTask, setAddModal, setMyTask, setValidation } from "@/ReduxToolkit/Reducers/TaskSlice";
import { AddTaskData } from "@/Types/TaskType";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import { TaskRadioRow } from "./TaskRadioRow";

export const NewTaskModalForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { validation } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const AddTask: SubmitHandler<AddTaskData> = (data) => {
    if (data.title !== "" && data.collection !== "" && data.description !== "") {
      dispatch(addNewTask(data));
      dispatch(setMyTask(data));
      dispatch(setAddModal());
      reset();
    }
  };

  return (
    <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTask)}>
      <Row>
        <Col md="12" className="mb-3 mt-0">
          <Label check>{TaskTitle}</Label>
          <Input type="text" className={`${validation && `${errors.title ? "is-invalid" : "is-valid"}`}`} {...register("title", {required: true,})} />
        </Col>
        <Col md="12" className="mb-3 mt-0">
          <Label check>{SubTask}</Label>
          <Input type="text"  />
        </Col>
        <TaskRadioRow />
        <Col md="6" className="mb-3 mt-0">
          <select className="form-control form-select js-example-basic-single">
            <option value="My Task">My Task</option>
          </select>
        </Col>
        <Col md="6" className="mb-3 mt-0">
          <select className={`js-example-disabled-results form-control form-select js-example-basic-single ${validation && `${errors.collections ? "is-invalid" : "is-valid"}`}`} {...register("collection", {required: true,})}>
            <option value="General">General</option>
          </select>
        </Col>
        <Col md="12" className="mb-3 my-0">
          <textarea className={`form-control ${validation && `${errors.description ? "is-invalid" : "is-valid"}`}`} {...register("description", {required: true,})} />
        </Col>
      </Row>
      <Button color="secondary" className="me-1" type="submit" onClick={() => dispatch(setValidation(true))}>{Save}</Button>
      <Button color="primary" onClick={() => dispatch(setAddModal())}>{Cancel}</Button>
    </Form>
  );
};
