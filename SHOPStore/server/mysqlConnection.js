// 导入mysql模块
const mysql = require("mysql");
// 默认配置
const defaultOptions = {
    host: "10.2.2.181",
    port: "3306",
    user: "root",
    password: "123456",
    database: "SHOPStore"
}
// 获取connection对象
function getConnection(options = defaultOptions) {
    return mysql.createConnection(options);
}
// 导出getConnection
module.exports = getConnection;
