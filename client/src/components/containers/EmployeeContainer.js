import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchEmployeeThunk,
  fetchAllTasksThunk,
  editTaskThunk
} from "../../store/thunks";

import { EmployeeView } from "../views";

const EmployeeContainer = ({
  employee,
  allTasks,
  fetchEmployee,
  editTask,
  fetchTask
}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchEmployee(id);
    fetchTask();
  }, [fetchEmployee, fetchTask, id]);

  return (
    <EmployeeView
      employee={employee}
      editTask={editTask}
      allTasks={allTasks}
    />
  );
};

const mapState = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTask: () => dispatch(fetchAllTasksThunk())
  };
};

export default connect(mapState, mapDispatch)(EmployeeContainer);