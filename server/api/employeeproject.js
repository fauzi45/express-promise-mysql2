const Router = require("express").Router();

const EmployeeProjectHelper = require("../helpers/EmployeeProjectHelper");

const allEmployeeProject = async (req, res) => {
  try {
    const response = await EmployeeProjectHelper.getEmployeeProjectList();
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

Router.get('/all', allEmployeeProject);

module.exports = Router;