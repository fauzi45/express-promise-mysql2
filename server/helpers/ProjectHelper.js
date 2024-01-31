const _ = require("lodash");
const ProjectDatabase = require("../services/ProjectDatabase");

const getProjectList = async () => {
  try {
    const response = await ProjectDatabase.getAllProjects();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getProjectList,
};
