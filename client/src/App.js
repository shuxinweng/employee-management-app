import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import {
  HomePageContainer,
  AllEmployeesContainer,
  EmployeeContainer,
  AllTasksContainer,
  TaskContainer,
  NewTaskContainer,
  EditTaskContainer,
  EditEmployeeContainer,
  NewEmployeeContainer
} from './components/containers';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePageContainer />} />
            <Route path="/employees" element={<AllEmployeesContainer />} />
            <Route path="/employees/:id" element={<EmployeeContainer />} />
            <Route path="/tasks" element={<AllTasksContainer />} />
            <Route path="/newtask" element={<NewTaskContainer />} />
            <Route path="/tasks/:id" element={<TaskContainer />} />
            <Route path="/edittask/:id" element={<EditTaskContainer />} />
            <Route path="/editemployee/:id" element={<EditEmployeeContainer />} />
            <Route path="/newemployee" element={<NewEmployeeContainer />} />
          </Routes>
        </ErrorBoundary>
      </HashRouter>
    </div>
  );
}

export default App;