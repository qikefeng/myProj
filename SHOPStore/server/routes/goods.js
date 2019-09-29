/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");

router.get("/", (req, res) => {
    let sql = '';
    const db = getConnection();
    db.connect();
    if (JSON.stringify(req.query) == "{}") {
        console.log('用户请求全部商品')
        sql = "select * from goods"
    } else {
        if (req.query.type) {
            console.log("用户请求相关类型")
            sql = `select * from goods where type = '${type}'`
        } else if (req.query.goods_name) {
            console.log("用户请求商品详情")
            sql = `select * from goods where name = ${goods_name}`
        } else if (req.query.search_name) {
            console.log("用户搜索商品")
            sql = `select * from goods where name like '%${req.query.search_name}%'`
        }
    }
    console.log("sql语句：", sql)
    db.query(sql, (err, sqlRes) => {
        if(err) {
            res.send(err.message);
        }else {
            res.send(sqlRes)
        }
    })
    db.end();
});


// 4. 导出路由
module.exports = router;