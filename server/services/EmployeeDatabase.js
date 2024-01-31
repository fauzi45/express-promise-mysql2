const _ = require('lodash');
const mysql = require('promise-mysql2');
const Config = require('./config');

  const getAllEmployee = async () => {
    try {
        const poolConnection = await Config.ConnectionPool.getConnection();
        const query = await poolConnection.query("select * from employees;");
        await poolConnection.connection.release();
        const result = Config.__constructQueryResult(query);

        return Promise.resolve(result);
    } catch (error) {
        console.log({message: error});
        return Promise.resolve([]);
    }
}

module.exports = {
  getAllEmployee,
};