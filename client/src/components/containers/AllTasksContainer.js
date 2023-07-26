import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllTasksThunk, deleteTaskThunk } from '../../store/thunks';
import AllTasksView from '../views/AllTasksView';

const AllTasksContainer = ({ allTasks, fetchAllTasks, deleteTask }) => {
  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);

  return (
    <div>
      <AllTasksView tasks={allTasks} deleteTask={deleteTask} />
    </div>
  );
};

const mapState = (state) => {
  return {
    allTasks: state.allTasks,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
    deleteTask: (taskId) => dispatch(deleteTaskThunk(taskId)),
  };
};

export default connect(mapState, mapDispatch)(AllTasksContainer);