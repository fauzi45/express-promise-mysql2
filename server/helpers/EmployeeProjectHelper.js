const _ = require("lodash");
const EmployeeProject = require("../services/EmployeeProjectDatabase");

const getEmployeeProjectList = async () => {
  try {
    const response = await EmployeeProject.getAllEmployeeProject();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEmployeeProjectList,
};
