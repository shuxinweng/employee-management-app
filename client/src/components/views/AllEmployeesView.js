import { Link } from 'react-router-dom';
import logo from '../img/logo192.png';

const AllEmployeesView = (props) => {
  let { employees, deleteEmployee } = props;

  if (!employees.length) {
    return (
      <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
        <Link to="/newemployee">
        <button className="button2">Add New Employee</button>
      </Link>
      <Link to="/">
        <button className="button2">Home Page</button>
      </Link>
        </div>
      </nav>
      <div className="container">
        <div className="left">
          <Link to="/">
            <button className="button1">Back</button>
          </Link>
        </div>
        <div class="center">
          <h2>All Employees</h2>
        </div>
      </div>
      <div>
        <p>There are no Employees</p>
        <p>Please add Employee to continue</p>
      </div>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
        <Link to="/newemployee">
        <button className="button2">Add New Employee</button>
      </Link>
      <Link to="/">
        <button className="button2">Home Page</button>
      </Link>
        </div>
      </nav>
      <div className="container">
        <div className="left">
          <Link to="/">
            <button className="button1">Back</button>
          </Link>
        </div>
        <div class="center">
          <h2>All Employees</h2>
        </div>
      </div>
      
    <div>
      {employees.map((employee) => {
        let first_name = employee.employee_first_name;
        let id = employee.id;
        return (
          <div key={employee.id}>
            <Link to={`/employees/${employee.id}`} className="link">
            <div>ID: {id}</div>
              {first_name}
            </Link>
            <button onClick={() => deleteEmployee(employee.id)} className="button1">Delete</button>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default AllEmployeesView;