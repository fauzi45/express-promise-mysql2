const _ = require("lodash");
const Department = require("../services/DepartmentDatabase");

const getDepartmentList = async () => {
  try {
    const response = await Department.getAllDepartments();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getDepartmentList,
};
