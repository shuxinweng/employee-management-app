import * as at from './actionTypes';

// All Employees
export const fetchAllEmployees = (employees) => {
    return {
        type: at.FETCH_ALL_EMPLOYEES,
        payload: employees,
    };
};

// Add Employee
export const addEmployee = (employee) => {
    return {
        type: at.ADD_EMPLOYEE,
        payload: employee,
    };
};

// Delete Employee
export const deleteEmployee = (employeeID) => {
    return {
        type: at.DELETE_EMPLOYEE,
        payload: employeeID,
    };
};

// Edit Employee
export const editEmployee = (employee) => {
    return {
        type: at.EDIT_EMPLOYEE,
        payload: employee,
    };
};

// Single Employee
export const fetchEmployee = (employee) => {
    return {
        type: at.FETCH_EMPLOYEE,
        payload: employee,
    };
};

// All Tasks
export const fetchAllTasks = (tasks) => {
    return {
        type: at.FETCH_ALL_TASKS,
        payload: tasks,
    };
};

// Add Task
export const addTask = (task) => {
    return {
        type: at.ADD_TASK,
        payload: task,
    };
};

// Delete Task
export const deleteTask = (taskID) => {
    return {
        type: at.DELETE_TASK,
        payload: taskID,
    };
};

// Edit Task
export const editTask = (task) => {
    return {
        type: at.EDIT_TASK,
        payload: task,
    };
};

// Single Task
export const fetchTask = (task) => {
    return {
        type: at.FETCH_TASK,
        payload: task,
    };
};