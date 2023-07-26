import { Link } from "react-router-dom";
import logo from '../img/logo192.png';

const EmployeeView = (props) => {
  const { employee, editTask, allTasks } = props;
  let assignedTasks = allTasks.filter((task) => task.assigned_to === employee.id);
  let availableTasks = allTasks.filter((task) => task.assigned_to !== employee.id);

  const handleTaskAssignment = async (taskId, assignedTo) => {
    await editTask({ id: taskId, assigned_to: assignedTo });
    window.location.reload();
  };

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
            <button style={{ marginTop: '16px' }} className="button1">Back</button>
          </Link>
        </div>
      </div>
    <div>
      <h1>{employee.employee_first_name}</h1>
      <h3>{employee.department_name}</h3>
      <Link to={`/editemployee/${employee.id}`} className="link">Edit Employee Information</Link>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <div>
          Assigned tasks:
          {assignedTasks.map((task) => {
            return (
              <div key={task.id}>
                <Link to={`/tasks/${task.id}`} className="link">
                  {task.description}
                </Link>
                <button className="button1" onClick={() => handleTaskAssignment(task.id, null)}>x</button>
              </div>
            );
          })}
        </div>
        <div>
          Available tasks:
          {availableTasks.map((task) => {
            return (
              <div key={task.id}>
                <Link to={`/tasks/${task.id}`} className="link">
                  {task.description}
                </Link>
                <button className="button1" onClick={() => handleTaskAssignment(task.id, employee.id)}>+</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmployeeView;