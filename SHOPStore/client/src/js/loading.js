import { BASE_URL } from "./lib";


//详情页---加载请求商品信息
export function loadingDetail(goods_name) {
    return new Promise((resolve, reject) => {
        $.ajax({
            //请求接口
            url: `${BASE_URL}/goods/?goods_name=${goods_name}`,
            success(res) {
                //把请求后收到的res存入sessionStorage
                //注！ res为数组，且color,standard字段为以逗号分隔的长字符串（需要分隔为数组后遍历拼接）

                let htmlStr = "";
                //拼接

                //获取需要显示的DOM元素，把拼接内容显示

                resolve(res);
            }
        })
    })
}