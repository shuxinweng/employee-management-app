import { Link } from 'react-router-dom';
import logo from '../img/logo192.png';

const AllTasksView = (props) => {
    let {tasks, deleteTask} = props;

    if (!tasks.length){
        return (
          <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
        <Link to="/newtask">
        <button className="button2">Add New Task</button>
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
          <h2>All Tasks</h2>
        </div>
      </div>
            <div>
                <p>There are no Tasks</p>
                <p>Please add task to continue </p>
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
        <Link to={`/newtask`}>
            <button className="button2">Add New Task</button>
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
          <h2>All Tasks</h2>
        </div>
      </div>
        <div>
            {tasks.map((task) => {
                let description = task.description;
                return (
                    <div key={task.id}>
                        <Link to={`/tasks/${task.id}`} className="link">
                            {description}
                        </Link>
                        <button onClick={() => deleteTask(task.id)} className="button1">Delete</button>
                    </div>
                );
            }
            )}
            <br></br>
        </div>
        </div>
    );
};

export default AllTasksView;