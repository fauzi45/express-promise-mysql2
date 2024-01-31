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

module.exports = {
  getAllProjectDB,
};
