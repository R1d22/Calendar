import "./styles.scss";

const ModalTaskInfo = ({
  active,
  setActive,
  name,
  description,
  date,
  time,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(el) => el.stopPropagation()}>
        <p>{name}</p>
        <p>{description}</p>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default ModalTaskInfo;
