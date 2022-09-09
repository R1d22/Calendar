import DateForm from "./DateForm/DateForm";
import "./styles.scss";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(el) => el.stopPropagation()}>
        <div className="date-modal-content">
          <p className="text">Chose Date</p>
          <DateForm accept={() => setActive(false)} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
