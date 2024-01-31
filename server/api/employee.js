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

Router.get('/all', allEmployee);

module.exports = Router;