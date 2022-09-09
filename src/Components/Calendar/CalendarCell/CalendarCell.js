import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { REMOVE_TASK } from "../../../store/actions";
import ModalTaskInfo from "./ModalTaskInfo/ModalTaskInfo";
// import crossIcon from "../../../assets/icons/cross.svg";
import { ReactComponent as CrossIcon } from "../../../assets/icons/cross.svg";
import "./styles.scss";
import Modal from "../../Modal/Modal";

const CalendarCell = ({ date, day }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.reducer.task);
  const [findTaskDate, setFindTaskDate] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    setFindTaskDate(
      task ? task.filter((el) => moment(el.date).isSame(date)) : []
    );
  }, [task]);
  return (
    <div className="main-cell">
      <div className="top-container">
        <b>{parseInt(day.toString().slice(8, 10), 10)}</b>
        <b>{date.toString().slice(0, 3)}</b>
      </div>
      <div className="todo-list">
        {findTaskDate.length > 0 && (
          <>
            {findTaskDate.map((el) => {
              return (
                <>
                  {modalActive && (
                    <ModalTaskInfo
                      name={el.name}
                      description={el.description}
                      date={el.date}
                      time={el.time}
                      active={modalActive}
                      setActive={setModalActive}
                    />
                  )}
                  <div className="task">
                    <div
                      className="task-name"
                      onClick={() => setModalActive(true)}
                    >
                      {el.name}
                    </div>

                    <div
                      className="button-div"
                      onClick={() => {
                        dispatch({
                          type: REMOVE_TASK,
                          payload: el,
                        });
                      }}
                    >
                      <CrossIcon />
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarCell;
