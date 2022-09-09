import moment from "moment";

import {
  ADD_TASK,
  REMOVE_TASK,
  ADD_MONTH,
  REMOVE_MONTH,
  SELECT_MONTH,
} from "./actions";

moment.updateLocale("eu", { week: { dow: 1 } });
const defaultState = {
  task: [],
  thisDay: moment(),
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        task: state.task.filter((el) => el.id !== action.payload.id),
      };
    case ADD_MONTH:
      return {
        ...state,
        thisDay: action.payload,
      };
    case REMOVE_MONTH:
      return {
        ...state,
        thisDay: action.payload,
      };
    case SELECT_MONTH:
      return {
        ...state,
        thisDay: action.payload,
      };

    default:
      return state;
  }
};
