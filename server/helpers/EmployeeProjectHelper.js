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

const getEmployeeProjectDetailHelper = async (id) => {
  try {
    const response = await EmployeeProject.getDetailEmployeeProjectDB(id);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEmployeeProjectList,
  getEmployeeProjectDetailHelper,
};
