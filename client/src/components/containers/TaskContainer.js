import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk, fetchEmployeeThunk } from "../../store/thunks";
import TaskView from "../views/TaskView";
import { useParams } from "react-router-dom";

const TaskContainer = ({ task, employee, fetchTask, fetchEmployee }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchTask(id);
    if (task.assigned_to) {
      fetchEmployee(task.assigned_to);
    }
  }, [id, fetchTask, fetchEmployee, task.assigned_to]);

  return <TaskView task={task} employee={employee} />;
};

const mapState = (state) => {
  return {
    task: state.task,
    employee: state.employee,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    fetchEmployee: (assigned_to) => dispatch(fetchEmployeeThunk(assigned_to)),
  };
};

export default connect(mapState, mapDispatch)(TaskContainer);