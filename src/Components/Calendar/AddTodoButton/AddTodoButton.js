import { useState } from "react";
import Modal from "./Modal/Modal";
import { ReactComponent as AddTaskIcon } from "../../../assets/icons/plus.svg";
import "./styles.scss";

const AddTodoButton = ({}) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className="icon-task" onClick={() => setModalActive(true)}>
        <AddTaskIcon />
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default AddTodoButton;
