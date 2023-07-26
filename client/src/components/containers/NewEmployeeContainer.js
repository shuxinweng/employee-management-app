import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import NewEmployeeView from '../views/NewEmployeeView';
import { addEmployeeThunk } from '../../store/thunks';

const NewEmployeeContainer = ({ addEmployee }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    department: '',
    redirect: false,
    error: ''
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (state.firstName === '' || state.department === '') {
      setState({ ...state, error: 'All fields are required' });
      return;
    }

    const newEmployee = {
      employee_first_name: state.firstName,
      employee_last_name: state.lastName,
      department_name: state.department
    };

    try {
      await addEmployee(newEmployee);
      setState({ ...state, redirect: true, error: '' });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      setState({ redirect: false });
    };
  }, []);

  if (state.redirect) {
    return <Navigate to="/employees" />;
  }

  return (
    <NewEmployeeView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={state.error}
    />
  );
};

const mapDispatch = (dispatch) => {
  return {
    addEmployee: (employee) => dispatch(addEmployeeThunk(employee))
  };
};

export default connect(null, mapDispatch)(NewEmployeeContainer);