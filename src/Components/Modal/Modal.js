import "./styles.scss";

const Modal = ({ active, setActive, fill }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(el) => el.stopPropagation()}>
        {fill}
      </div>
    </div>
  );
};

export default Modal;
