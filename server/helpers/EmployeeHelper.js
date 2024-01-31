const _ = require("lodash");
const { getAllEmployee } = require("../services/EmployeeDatabase");

const getEmployeeList = async () => {
  try {
    const response = await getAllEmployee();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEmployeeList,
};
