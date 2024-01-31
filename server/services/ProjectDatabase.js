const _ = require("lodash");
const Config = require("./config");

const getAllProjectDB = async () => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query("select * from projects;");
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("There's no data on project");
    }
    return Promise.resolve(result);
  } catch (error) {
    throw error;
  }
};

const getDetailProjectDB = async (id) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    const query = await poolConnection.query(
      `select * from projects where ProjectID = ${id} ;`
    );
    await poolConnection.connection.release();
    const result = Config.__constructQueryResult(query);
    if (result.length === 0) {
      throw new Error("Project with this id doesn't exist");
    }
    return Promise.resolve(result);
  } catch (error) {
    throw error;
  }
};

const createProjectDB = async (name) => {
  try {
    const poolConnection = await Config.ConnectionPool.getConnection();
    await poolConnection.query(
      `INSERT INTO projects (Name) VALUES ('${name}');`
    );
    await poolConnection.connection.release();
    return Promise.resolve([]);
  } catch (error) {
    throw error;
  }
};

const updateProjectDB = async (id, name) => {
    try {
      const poolConnection = await Config.ConnectionPool.getConnection();
      const query = await poolConnection.query(
        `select * from Projects where ProjectID = ${id}`
      );
      await poolConnection.connection.release();
      const result = Config.__constructQueryResult(query);
      if (result.length === 0) {
        throw new Error("Project with this id doesn't exist");
      }
      if (result !== 0) {
        await poolConnection.query(
          `update Projects set Name = '${
            name ? name : result[0].Name
          }' where ProjectID = ${id}`
        );
      }
      return Promise.resolve([]);
    } catch (error) {
      throw error;
    }
  };

module.exports = {
  getAllProjectDB,
  getDetailProjectDB,
  createProjectDB,
  updateProjectDB,
};
