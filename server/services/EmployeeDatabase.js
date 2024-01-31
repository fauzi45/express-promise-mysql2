const _ = require("lodash");
const Config = require("./config");

const getAllEmployee = async () => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      "select employees.EmployeeID as EmployeeID, employees.name AS EmployeeName, employees.Position as EmployeePosition, departments.Name as DeparmentName  from employees inner join departments on departments.DepartmentID = employees.DepartmentID;"
    );
    if (!query) {
      throw new Error("Failed to get data employee");
    }
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
    throw error;
  }
};

const createEmployee = async (name, position, departmentId) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      `INSERT INTO employees (Name, Position, DepartmentID) VALUES ('${name}','${position}','${departmentId}');`
    );
    console.log(query);
    await poolConnection.connection.release();
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

const updateEmployee = async (id, name, position, departmentId) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      `select * from employees where EmployeeID = ${id}`
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("Employee with this id doesn't exist");
    }
    if (result !== 0) {
      await poolConnection.query(`update employees set name = '${name ? name : result[0].name}' where EmployeeID = ${id}`);
    }
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

const deleteEmployee = async (id) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      `DELETE from employees where EmployeeID = '${id}' ;`
    );
    await poolConnection.connection.release();
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllEmployee,
  getDetailEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
