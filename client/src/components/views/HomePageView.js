import { Link } from 'react-router-dom';
import './HomePageView.css';
import logo from '../img/logo192.png';

const HomePageView = () => {
    return (
        <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
            <Link to={'/employees'} >
                <button className="button2"> All Employees </button>
            </Link>
            <Link to={'/tasks'} >
                <button className="button2"> All Tasks </button>
            </Link>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to Employee Management App</h1>
        <p>Made by: Min Pan, Shuxin Weng, Ying Jie Mei, Youssef Elsuradi</p>
      </div>
    </div>
    );
};

export default HomePageView;