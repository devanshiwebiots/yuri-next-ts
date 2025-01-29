import { AddTask, NewTask } from "@/Constants";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { setAddModal } from "@/ReduxToolkit/Reducers/TaskSlice";
import { Fragment } from "react";
import { CheckCircle } from "react-feather";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { NewTaskModalForm } from "./NewTaskModalForm";

const NewTaskClass = () => {
  const { addModal } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const addToggle = () => dispatch(setAddModal());

  return (
    <Fragment>
      <Button color="transparent" className="button-primary btn-block btn-mail w-100" onClick={addToggle}>
        <CheckCircle className="me-2" />
        {NewTask}
      </Button>
      <Modal size="lg" isOpen={addModal} toggle={addToggle}>
        <ModalHeader>
          <h3 className="modal-title">{AddTask}</h3>
          <Button close color="transprant" onClick={addToggle} />
        </ModalHeader>
        <ModalBody>
          <NewTaskModalForm />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default NewTaskClass;
