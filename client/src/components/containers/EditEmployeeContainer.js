import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../img/logo192.png';

import { editEmployeeThunk } from '../../store/thunks';

const EditTaskContainer = ({ employee, editEmployee }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    department: '',
    redirect: false,
    error: ''
  });

  useEffect(() => {
    setState({
      firstName: employee.employee_first_name,
      lastName: employee.employee_last_name,
      department: employee.department_name
    });
  }, [employee]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state.firstName === '' || state.department === '') {
      setState({ ...state, error: 'All fields are required' });
      return;
    }

    const newEmployee = {
      id: employee.id,
      employee_first_name: state.firstName,
      employee_last_name: state.lastName,
      department_name: state.department
    };

    try {
      await editEmployee(newEmployee);
      navigate(`/employees/${employee.id}`);
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

  const navigate = useNavigate();

  // if (state.redirect) {
  //   return <Navigate to="/employees" />;
  // }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
        <Link to="/">
            <button className="button2">Home Page</button>
        </Link>
        </div>
      </nav>
      <div className="container">
        <div className="left">
          <Link to="/employees">
            <button className="button1">Back</button>
          </Link>
        </div>
        <div class="center">
          <h2>Edit Employee Information</h2>
        </div>
      </div>
      <div>
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <label style={{ color: '#11153e', fontWeight: 'bold' }}>
          Employee First Name:{' '}
        </label>
        <input
          type="text"
          name="firstName"
          value={state.firstName || ''}
          placeholder={employee.employee_first_name}
          onChange={handleChange}
        />
        <br/>
        <br/>

        <label style={{ color: '#11153e', fontWeight: 'bold' }}>
          Employee Last Name:{' '}
        </label>
        <input
          type="text"
          name="lastName"
          value={state.lastName || ''}
          placeholder={employee.employee_last_name}
          onChange={handleChange}
        />
        <br/>
        <br/>

        <label style={{ color: '#11153e', fontWeight: 'bold' }}>
          Department Name:{' '}
        </label>
        <input
          type="text"
          name="department"
          value={state.department || ''}
          placeholder={employee.department_name}
          onChange={handleChange}
        />
        <br/>
        <br/>

        <button className="button1" type="submit">Submit</button>
      </form>

    </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    employee: state.employee
  };
};

const mapDispatch = (dispatch) => {
  return {
    editEmployee: (employee) => dispatch(editEmployeeThunk(employee))
  };
};

export default connect(mapState, mapDispatch)(EditTaskContainer);