const _ = require("lodash");
const Config = require("./config");

const getAllEmployeeProject = async () => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      "select employeeprojects.EmployeeProjectID as EmployeeProjectID, employees.Name as EmployeeName, projects.Name as ProjectName, employeeprojects.role as Role from employeeprojects INNER JOIN employees on employees.EmployeeID = employeeprojects.EmployeeID INNER JOIN projects on projects.ProjectID = employeeprojects.ProjectID order by employeeprojects.EmployeeProjectID;"
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("There's no data on employee project");
    }
    return Promise.resolve(result);
  } catch (error) {
    throw error;
  }
};

const getDetailEmployeeProjectDB = async (id) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      `select employeeprojects.EmployeeProjectID as EmployeeProjectID, employees.Name as EmployeeName, projects.Name as ProjectName, employeeprojects.Role as Role from employeeprojects INNER JOIN employees on employees.EmployeeID = employeeprojects.EmployeeID INNER JOIN projects on projects.ProjectID = employeeprojects.ProjectID where employeeprojects.EmployeeProjectID = ${id} ;`
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("Employee Project with this id doesn't exist");
    }
    return Promise.resolve(result);
  } catch (error) {
    throw error;
  }
};

const createEmployeeProjectDB = async (employeeId, projectId, role) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    await poolConnection.query(
      `INSERT INTO employeeprojects (EmployeeID, ProjectID, Role) VALUES ('${employeeId}', '${projectId}', '${role}');`
    );
    await poolConnection.connection.release();
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllEmployeeProject,
  getDetailEmployeeProjectDB,
  createEmployeeProjectDB
};
