/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router  = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");
router.post("/register", (req, res) => {
    let {username, email, password} = req.body;
    let sqlParams = [username, email, password];
    let sql = "INSERT INTO users (username, email, password) VALUES (?,?,?)";
    let db = getConnection();
    db.connect();
    db.query(sql, sqlParams, (err, sqlRes) => {
        if(err) {
            // 用户已存在
            res.send({
                status: "201",
                errMsg: "用户已存在"
            })
        }else {
            console.log(username,"用户注册成功");
            res.send({
                status: "200",
                user: req.body
            })
        }
    })
    db.end();
});
router.post("/login", (req, res) => {
    let {username, password} = req.body;
    let sqlParams = [username, password];
    let sql = "SELECT * FROM users WHERE username = ? and password = ?";
    let db = getConnection();
    db.connect();
    db.query(sql, sqlParams, (err, sqlRes) => {
        console.log(sqlRes)
        if(sqlRes.length == 0) {
            res.send({
                status: "202",
                errMsg: "用户或密码错误"
            })
        }else {
            let user = sqlRes[0];
            delete user.password;
            console.log(`${user.username}用户登陆成功`);
            res.send({status: "200",user});
        }
    })
    db.end();
});


// 4. 导出路由
module.exports = router;




