const _ = require("lodash");
const Employee = require("../services/EmployeeDatabase");

const getEmployeeListHelper = async () => {
  try {
    const response = await Employee.getAllEmployeeDB();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getEmployeeDetailHelper = async (id) => {
  try {
    const response = await Employee.getDetailEmployeeDB(id);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const createEmployeeHelper = async (name, position, departmentId) => {
  try {
    const response = await Employee.createEmployeeDB(name, position, departmentId);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const updateEmployeeHelper = async (id, name, position, departmentId) => {
  try {
    const response = await Employee.updateEmployeeDB(id,name, position, departmentId);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const deleteEmployeeHelper = async (id) => {
  try {
    const response = await Employee.deleteEmployeeDB(id);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEmployeeListHelper,
  getEmployeeDetailHelper,
  createEmployeeHelper,
  deleteEmployeeHelper,
  updateEmployeeHelper
};
