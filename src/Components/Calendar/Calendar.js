import moment from "moment";
import { useSelector } from "react-redux";

import CalendarCell from "./CalendarCell/CalendarCell";

const Calendar = () => {
  const thisDay = useSelector((state) => moment(state.reducer.thisDay));

  const firstMonthsDay = thisDay.clone().startOf("month").startOf("week");
  const lastMonthDay = thisDay.clone().endOf("month").endOf("week");

  const allMonthDays = [];
  const day = firstMonthsDay.clone();
  while (!day.isAfter(lastMonthDay)) {
    allMonthDays.push(day.clone());
    day.add(1, "day");
  }
  return (
    <>
      <div className="all-days">
        {allMonthDays.map((el) => {
          return (
            <CalendarCell
              day={el._d}
              date={el._d}
              allMonthDays={allMonthDays}
              key={el._d}
            />
          );
        })}
      </div>
    </>
  );
};

export default Calendar;
