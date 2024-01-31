const _ = require("lodash");
const Department = require("../services/DepartmentDatabase");

const getDepartmentListHelper = async () => {
  try {
    const response = await Department.getAllDepartmentDB();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getDepartmentDetailHelper = async (id) => {
  try {
    const response = await Department.getDetailDepartmentDB(id);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const createDepartmentHelper = async (name) => {
  try {
    const response = await Department.createDepartmentDB(name);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const updateDepartmentHelper = async (id, name) => {
  try {
    const response = await Department.updateDepartmentDB(id,name);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const deleteDepartmentHelper = async (id) => {
  try {
    const response = await Department.deleteDepartmentDB(id);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getDepartmentListHelper,
    getDepartmentDetailHelper,
    createDepartmentHelper,
    updateDepartmentHelper,
    deleteDepartmentHelper
};
