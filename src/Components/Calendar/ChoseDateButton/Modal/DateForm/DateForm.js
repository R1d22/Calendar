import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import moment from "moment";
import { SELECT_MONTH } from "../../../../../store/actions";
import "./styles.scss";
import Button from "../../../../Button/Button";

const DateForm = ({ accept }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ date: "" }}
        onSubmit={(values) => {
          const momentDate = new Date(values.date);
          dispatch({
            type: SELECT_MONTH,
            payload: moment(momentDate),
          });
        }}
      >
        <Form>
          <div className="date-form">
            <Field name="date" type="month" />
            <Button text={"Submit"} accept={accept} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DateForm;
