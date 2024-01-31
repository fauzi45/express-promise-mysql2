const Router = require("express").Router();

const DepartmentHelper = require("../helpers/DepartmentHelper");
const ValidationDepartmentHelper = require("../helpers/validation/ValidationDepartmentHelper");

const allDepartment = async (req, res) => {
  try {
    const response = await DepartmentHelper.getDepartmentListHelper();
    return res
      .status(200)
      .send({ message: "Department data received successfully", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Department data failed to be received",
      data: err.message,
    });
  }
};

const detailDepartment = async (req, res) => {
  try {
    ValidationDepartmentHelper.detailDepartmentValidation(req.query);
    const { id } = req.query;
    const response = await DepartmentHelper.getDepartmentDetailHelper(id);
    return res
      .status(200)
      .send({
        message: "Department detail data received successfully",
        data: response,
      });
  } catch (err) {
    res.status(400).send({
      message: "Department detail data failed to be received",
      data: err.message,
    });
  }
};

const createDepartment = async (req, res) => {
  try {
    ValidationDepartmentHelper.createDepartmentValidation(req.body);
    const { name } = req.body;
    const response = await DepartmentHelper.createDepartmentHelper(
      name
    );
    return res
      .status(200)
      .send({ message: "Department data successfully created", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Department data failed to be created",
      data: err.message,
    });
  }
};

const updateDepartment = async (req, res) => {
  try {
    ValidationDepartmentHelper.updateDepartmentValidation(req.query);
    const { id } = req.query;
    const { name } = req.body;
    const response = await DepartmentHelper.updateDepartmentHelper(
      id,
      name
    );
    return res
      .status(200)
      .send({ message: "Department data successfully updated", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Department data failed to be updated",
      data: err.message,
    });
  }
};

Router.get('/all', allDepartment);
Router.get('/detail', detailDepartment);
Router.post('/create', createDepartment);
Router.put('/update', updateDepartment);
module.exports = Router;