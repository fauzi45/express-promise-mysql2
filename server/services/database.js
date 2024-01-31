const _ = require('lodash');
const mysql = require('promise-mysql2');

const ConnectionPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'companyDB',
    port: '3306'
});

const __constructQueryResult = (query) => {
    const result = [];
    if (!_.isEmpty(query[0])) {
      query[0].forEach((item) => {
        const key = Object.keys(item);
  
        // Reconstruct query result
        const object = {};
        key.forEach((data) => {
          object[data] = item[data];
        });
  
        result.push(object);
      });
    }
  
    return result;
  };

module.exports = {
};