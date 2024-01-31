const _ = require('lodash');
const Config = require('./config');

  const getAllProjects = async () => {
    try {
        const poolConnection = await Config.ConnectionPool.getConnection();
        const query = await poolConnection.query("select * from employeeprojects;");
        await poolConnection.connection.release();
        const result = Config.__constructQueryResult(query);

        return Promise.resolve(result);
    } catch (error) {
        console.log({message: error});
        return Promise.resolve([]);
    }
}

module.exports = {
    getAllProjects,
};