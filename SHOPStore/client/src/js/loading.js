import { BASE_URL } from "./lib";


//详情页---加载请求商品信息
function loadingDetail() {
    return new Promise((resolve, reject) => {
        $.ajax({
            //请求接口
            url: `${BASE_URL}/`,
            success(res) {
                //把请求后收到的res存入sessionStorage

                let htmlStr = "";
                //拼接

                //获取需要显示的DOM元素，把拼接内容显示

                resolve();
            }
        })
    })
}