import "../less/detail.less";
import {
    loadingDetail
} from "./loading";
import Swiper from "swiper";

console.log(2)
loadingDetail('WH-H900N');

//购物车加减数量
$(".add").click(function () {

    var n = $(this).prev().children().html();
    var num = parseInt(n) + 1;
    $(this).prev().children().html(num);
});
$(".reduce").click(function () {
    var n = $(this).next().children().html();
    var num = parseInt(n) - 1;
    if (num == 0) { return; }//数量减到0就不能再减了
    $(this).next().children().html(num);
});
$(".buybtn").click(function () {
    var respro = JSON.parse(sessionStorage.getItem('res'));
    let num = $(".num").text();
    let color = $(".sel").html();
    console.log(respro)
    let resArr = respro[0];
    //购物车数据存进sessionStorage
    sessionStorage.setItem('order', JSON.stringify({
        name: resArr.name,
        number: num,
        color: color,
        price: resArr.price
    }));
    // 跳转到购物车页面
    $(".shop").toggleClass("showshop");
        $(".shade").click(function () {
            $(".showshop").removeClass("showshop");
    })
    $(".g_buy").click(function () {
        location.href = "account.html"
    })
    // $(".shade").click(function(){
    //     $(".shop").toggleClass("shop");
    // })
})


// 购物车数据发送到服务器


// router.get(`${BASE_URL}/orders`, (req, res) => {
//     // 获取页面传到后台的数据
//     var { name, color, number, price } = req.query;
//     console.log(req.query)
//     const db = getConnection();
//     db.connect();
//     db.query("INSERT INTO `order` (title, color,size,number,price,img) VALUES (?,?,?,?,?,?)", [name, color, number, price ], (err, sqlRes) => {
//         console.log(err)
//         res.send(JSON.stringify(sqlRes));
//     })

//     db.end();
// })



