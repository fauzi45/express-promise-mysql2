const _ = require("lodash");
const Config = require("./config");

const getAllEmployee = async () => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      "select employees.EmployeeID as EmployeeID, employees.name AS EmployeeName, employees.Position as EmployeePosition, departments.Name as DeparmentName  from employees inner join departments on departments.DepartmentID = employees.DepartmentID;"
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);

    return Promise.resolve(result);
  } catch (error) {
    console.log({ message: error });
    return Promise.resolve([]);
  }
};

const getDetailEmployee = async (id) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      `select employees.EmployeeID as EmployeeID, employees.name AS EmployeeName, employees.Position as EmployeePosition, departments.Name as DeparmentName  from employees inner join departments on departments.DepartmentID = employees.DepartmentID WHERE employees.EmployeeID = ${id} ;`
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);

    return Promise.resolve(result);
  } catch (error) {
    console.log({ message: error });
    return Promise.resolve([]);
  }
};

module.exports = {
  getAllEmployee,
  getDetailEmployee,
};
