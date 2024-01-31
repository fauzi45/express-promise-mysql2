const _ = require("lodash");
const Project = require("../services/ProjectDatabase");

const getProjectListHelper = async () => {
  try {
    const response = await Project.getAllProjectDB();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getProjectDetailHelper = async (id) => {
  try {
    const response = await Project.getDetailProjectDB(id);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const createProjectHelper = async (name) => {
  try {
    const response = await Project.createProjectDB(name);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const updateProjectHelper = async (id, name) => {
  try {
    const response = await Project.updateProjectDB(id,name);
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getProjectListHelper,
  getProjectDetailHelper,
  createProjectHelper,
  updateProjectHelper,
};
