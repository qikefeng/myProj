import "../less/detail.less";
import { BASE_URL } from "./lib";
import {
    loadingDetail
} from "./loading";

loadingDetail('WI-1000X');

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
    if (!localStorage.LOC_USER) {
        alert("请登录后操作!") }
    else {
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

            location.href = "../pages/account.html";
        })
    }
})

// 购物车数据发送到服务器
function addShopping(user, order) {
    orderj = JSON.stringify(order);
    fetch("http://127.0.0.1:8081/order", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user,
            order: orderj
        })
    }).then(response => response.json())
        .then(data => {
            console.log(data)
        })
}
let order = JSON.parse(sessionStorage.getItem('order'));
// let user = admin;
addShopping(user, order);


