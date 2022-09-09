import "./styles.scss";
import TodoForm from "./TodoForm/TodoForm";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(el) => el.stopPropagation()}>
        <TodoForm accept={setActive} title={"Add new idea item"} />
      </div>
    </div>
  );
};

export default Modal;
