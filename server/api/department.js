const Router = require("express").Router();

const DepartmentHelper = require("../helpers/DepartmentHelper");

const allDepartments = async (req, res) => {
  try {
    const response = await DepartmentHelper.getDepartmentList();
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

Router.get('/all', allDepartments);

module.exports = Router;