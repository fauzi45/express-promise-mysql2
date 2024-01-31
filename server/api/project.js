const Router = require("express").Router();

const ProjectHelper = require("../helpers/ProjectHelper");

const allEmployee = async (req, res) => {
  try {
    const response = await ProjectHelper.getProjectList();
    return res
      .status(200)
      .send({ message: "Project data received successfully", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Project data failed to be received",
      data: err.message,
    });
  }
};

Router.get('/all', allEmployee);

module.exports = Router;