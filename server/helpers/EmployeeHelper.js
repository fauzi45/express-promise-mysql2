const _ = require("lodash");
const Employee = require("../services/EmployeeDatabase");

const getEmployeeList = async () => {
  try {
    const response = await Employee.getAllEmployee();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getEmployeeDetail = async (id) => {
  try {
    const response = await Employee.getDetailEmployee(id);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEmployeeList,
  getEmployeeDetail,
};
