const _ = require("lodash");
const Employee = require("../services/EmployeeDatabase");

const getEmployeeList = async () => {
  try {
    const response = await Employee.getAllEmployee();
    if (response.length === 0) {
      throw new Error("There's no data on employee");
    }
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getEmployeeDetail = async (id) => {
  try {
    const response = await Employee.getDetailEmployee(id);
    if (response.length === 0) {
      throw new Error("Employee with this id doesn't exist");
    }
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const createEmployeeHelper = async (name, position, departmentId) => {
  try {
    const response = await Employee.createEmployee(name, position, departmentId);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const deleteEmployeeHelper = async (id) => {
  try {
    const response = await Employee.deleteEmployee(id);
    if (response.length === 0) {
      throw new Error("Employee with this id doesn't exist");
    }
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEmployeeList,
  getEmployeeDetail,
  createEmployeeHelper,
  deleteEmployeeHelper,
};
