const Router = require("express").Router();

const EmployeeProjectHelper = require("../helpers/EmployeeProjectHelper");
const ValidationEmployeeProjectHelper = require("../helpers/validation/ValidationEmployeeProjectHelper");

const allEmployeeProject = async (req, res) => {
  try {
    const response = await EmployeeProjectHelper.getEmployeeProjectList();
    return res
      .status(200)
      .send({ message: "Employee Project data received successfully", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Employee Project data failed to be received",
      data: err.message,
    });
  }
};

const detailEmployeeProject = async (req, res) => {
  try {
    ValidationEmployeeProjectHelper.detailEmployeeProjectValidation(req.query);
    const { id } = req.query;
    const response = await EmployeeProjectHelper.getEmployeeProjectDetailHelper(id);
    return res.status(200).send({
      message: "Employee Project detail data received successfully",
      data: response,
    });
  } catch (err) {
    res.status(400).send({
      message: "Employee Project detail data failed to be received",
      data: err.message,
    });
  }
};

Router.get('/all', allEmployeeProject);
Router.get('/detail', detailEmployeeProject);

module.exports = Router;