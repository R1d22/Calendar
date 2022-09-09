import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";
import Button from "../../../../Button/Button";

const TodoForm = ({ title, accept }) => {
  const dispatch = useDispatch();
  const addTask = (el) => {
    const taskIded = { ...el, id: uuidv4() };
    dispatch({ type: "ADD_TASK", payload: taskIded });
  };

  return (
    <div>
      <h1>{title}</h1>
      <Formik
        initialValues={{ name: "", description: "", date: "", time: "" }}
        onSubmit={(values) => {
          addTask(values);
        }}
      >
        <Form>
          <div className="task-form-container">
            <div className="fields">
              <Field
                className="no-border"
                name="name"
                type="text"
                placeholder="Task *"
                required
              />
              <Field
                className="no-border texarea"
                name="description"
                as="textarea"
                placeholder="Description"
              />
              <Field name="date" type="date" className="no-border" required />
              <Field
                className="no-border "
                name="time"
                type="time"
                draggable="false"
              />
            </div>
            <div className="center-btn">
              <Button text={"Submit"} accept={accept} />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default TodoForm;
