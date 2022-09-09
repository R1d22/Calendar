import { useState } from "react";
import Modal from "./Modal/Modal";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import "./styles.scss";

const ChoseDateButton = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className="date-icon" onClick={() => setModalActive(true)}>
        <CalendarIcon />
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default ChoseDateButton;
