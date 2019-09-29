/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");
/**
 * 图片资源
 * kind 参数
 */
router.get("/images", (req, res) => {
    let { kind } = req.query;
    switch (kind) {
        // 轮播图
        case "slides": {
            let images = [];
            for (let i = 1; i < 6; i++) {
                images.push(`slide_${i}.jpg`);
            }
            res.send(images);
        } break;
        // 横幅图标
        case "banner": {
            let icons = [], promos = [];
            let texts = ["小米秒杀", "企业团购", "F码通道", "米粉卡", "以旧换新", "话费充值"];

            for (let i = 1; i < 7; i++) {
                icons.push({
                    imgName: `icon_${i}.png`,
                    text: texts[i - 1]
                });
            }
            for (let i = 1; i < 4; i++) {
                promos.push(`promo_${i}.jpg`);
            }
            res.send({icons, promos});
        } break;
    }
    
});
/**
 * 商品信息
 * kind 参数
 */
router.get("/goods", (req, res) => {
    let {kind} = req.query;
    let sql = `SELECT * FROM goods WHERE kind = '${kind}'`;
    const db = getConnection();
    db.connect();
    db.query(sql, (err, sqlRes) => {
        if(err) {
            console.log(err.message);
        }else {
            res.send({
                title: "手机",
                banner: "phone_banner.png",
                promo: "phone_promo.png",
                contentlist: sqlRes
            })
        }
    })
    db.end();
});

// 4. 导出路由
module.exports = router;




