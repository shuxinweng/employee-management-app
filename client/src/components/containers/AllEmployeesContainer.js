import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllEmployeesThunk, deleteEmployeeThunk } from '../../store/thunks';
import AllEmployeesView from '../views/AllEmployeesView';

const AllEmployeesContainer = ({
  allEmployees,
  fetchAllEmployees,
  deleteEmployee
}) => {
  useEffect(() => {
    fetchAllEmployees();
  }, [fetchAllEmployees]);

  return (
    <div>
      <AllEmployeesView employees={allEmployees} deleteEmployee={deleteEmployee} />
    </div>
  );
};

const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
    deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId)),
  };
};

export default connect(mapState, mapDispatch)(AllEmployeesContainer);