import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ADD_MONTH, REMOVE_MONTH } from "../../store/actions";
import AddTodoButton from "../Calendar/AddTodoButton/AddTodoButton";
import ChoseDateButton from "../Calendar/ChoseDateButton/ChoseDateButton";
import MonthButton from "../Calendar/MounthButton/MounthButton";
import "./styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const thisDay = useSelector((state) => moment(state.reducer.thisDay));
  const [monthName, setMonthName] = useState(
    thisDay.clone().startOf("month").format("MMMM")
  );
  const [year, setYear] = useState(thisDay.startOf("month").format("YYYY"));
  useEffect(() => {
    setMonthName(thisDay.clone().startOf("month").format("MMMM"));
    setYear(thisDay.clone().startOf("month").format("YYYY"));
  }, []);
  const prevMonth = () => {
    dispatch({
      type: REMOVE_MONTH,
      payload: thisDay.clone().subtract(1, "month"),
    });
  };
  const nextMonth = () => {
    dispatch({
      type: ADD_MONTH,
      payload: thisDay.clone().add(1, "month"),
    });
  };

  return (
    <div className="main-container">
      <div className="date-container">
        <MonthButton
          month={monthName}
          minus={prevMonth}
          plus={nextMonth}
          year={year}
        />
        <ChoseDateButton />
      </div>
      <div className="task-container">
        <AddTodoButton />
      </div>
    </div>
  );
};

export default Header;
