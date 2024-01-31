const _ = require("lodash");
const Config = require("./config");

const getAllDepartmentsDB = async () => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query("select * from departments;");
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("There's no data on department");
    }
    return Promise.resolve(result);
  } catch (error) {
    throw error;
  }
};

const getDetailDepartmentsDB = async (id) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      `select * from departments where DepartmentID = ${id} ;`
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("Department with this id doesn't exist");
    }
    return Promise.resolve(result);
  } catch (error) {
    throw error;
  }
};

const createDepartmentDB = async (name) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    await poolConnection.query(
      `INSERT INTO departments (Name) VALUES ('${name}');`
    );
    await poolConnection.connection.release();
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDepartmentsDB,
  getDetailDepartmentsDB,
  createDepartmentDB
};
