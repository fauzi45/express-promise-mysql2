const _ = require("lodash");
const Config = require("./config");

const getAllEmployeeDB = async () => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      "select employees.EmployeeID as EmployeeID, employees.name AS EmployeeName, employees.Position as EmployeePosition, departments.Name as DeparmentName  from employees inner join departments on departments.DepartmentID = employees.DepartmentID;"
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("There's no data on employee");
    }
    return Promise.resolve(result);
  } catch (error) {
    throw error;
  }
};

const getDetailEmployeeDB = async (id) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      `select employees.EmployeeID as EmployeeID, employees.name AS EmployeeName, employees.Position as EmployeePosition, departments.Name as DeparmentName  from employees inner join departments on departments.DepartmentID = employees.DepartmentID WHERE employees.EmployeeID = ${id} ;`
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("Employee with this id doesn't exist");
    }
    return Promise.resolve(result);
  } catch (error) {
    throw error;
  }
};

const createEmployeeDB = async (name, position, departmentId) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    await poolConnection.query(
      `INSERT INTO employees (Name, Position, DepartmentID) VALUES ('${name}','${position}','${departmentId}');`
    );
    await poolConnection.connection.release();
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

const updateEmployeeDB = async (id, name, position, departmentId) => {
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
      await poolConnection.query(
        `update employees set Name = '${
          name ? name : result[0].Name
        }',Position = '${
          position ? position : result[0].Position
        }', DepartmentID = '${
          departmentId ? departmentId : result[0].DepartmentID
        }' where EmployeeID = ${id}`
      );
    }
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

const deleteEmployeeDB = async (id) => {
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
      await poolConnection.query(
        `DELETE from employees where EmployeeID = '${id}' ;`
      );
    }
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllEmployeeDB,
  getDetailEmployeeDB,
  createEmployeeDB,
  updateEmployeeDB,
  deleteEmployeeDB,
};
