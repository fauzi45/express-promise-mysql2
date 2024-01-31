const _ = require("lodash");
const Department = require("../services/DepartmentDatabase");

const getDepartmentListHelper = async () => {
  try {
    const response = await Department.getAllDepartmentsDB();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getDepartmentDetailHelper = async (id) => {
  try {
    const response = await Department.getDetailDepartmentsDB(id);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getDepartmentListHelper,
    getDepartmentDetailHelper
};
