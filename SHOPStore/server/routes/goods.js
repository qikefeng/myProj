/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");

router.get("/", (req, res) => {
    console.log('用户请求商品信息')
    let type = req.query.type;
    let goods_name = req.query.goods_name;
    if (req.query.type) {
        let sql = `select * from goods where type = '${type}'`
    } else if (req.query.goods_name) {
        let sql = `select * from goods where name = ${goods_name}`
    } else if (req.query.search_name) {
        let sql = `select * from goods where name like '%${req.query.search_name}%'`
    } else {
        let sql = "select * from goods"
    }

    if (sql) {
        console.log("=====")
        const db = getConnection();
        db.connect();
        db.query(sql, (err, sqlRes) => {
            if (err) {
                console.log(err.message);
            } else {
                res.send(JSON.stringify(sqlRes));
            }
        })
        db.end();
    }else{
        console.log("欢迎来到详情页")
    }
});


// 4. 导出路由
module.exports = router;