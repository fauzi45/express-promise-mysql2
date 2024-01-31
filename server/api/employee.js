const Router = require("express").Router();

const EmployeeHelper = require("../helpers/EmployeeHelper");

const allEmployee = async (req, res) => {
  try {
    const response = await EmployeeHelper.getEmployeeList();
    return res
      .status(200)
      .send({ message: "Employee data received successfully", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Employee data failed to be received",
      data: err.message,
    });
  }
};

const detailEmployee = async (req, res) => {
  try {
    const { id } = req.query;
    const response = await EmployeeHelper.getEmployeeDetail(id);
    return res
      .status(200)
      .send({
        message: "Employee detail data received successfully",
        data: response,
      });
  } catch (err) {
    res.status(400).send({
      message: "Employee detail data failed to be received",
      data: err.message,
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { name, position, departmentId } = req.body;
    const response = await EmployeeHelper.createEmployeeHelper(
      name,
      position,
      departmentId
    );
    return res
      .status(200)
      .send({ message: "Employee data successfully created", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Employee data failed to be created",
      data: err.message,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, position, departmentId } = req.body;
    const response = await EmployeeHelper.updateEmployeeHelper(
      id,
      name,
      position,
      departmentId
    );
    return res
      .status(200)
      .send({ message: "Employee data successfully updated", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Employee data failed to be updated",
      data: err.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.query;
    const response = await EmployeeHelper.deleteEmployeeHelper(id);
    return res
      .status(200)
      .send({ message: "Employee data successfully deleted", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Employee data failed to be deleted",
      data: err.message,
    });
  }
};

Router.get("/all", allEmployee);
Router.get("/detail", detailEmployee);
Router.post("/create", createEmployee);
Router.put("/update", updateEmployee);
Router.delete("/delete", deleteEmployee);

module.exports = Router;
