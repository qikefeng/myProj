import { BASE_URL } from "./lib";



//详情页---加载请求商品信息
export function loadingDetail(goods_name) {
    console.log(`${BASE_URL}/goods/?goods_name=${goods_name}`)
    return new Promise((resolve, reject) => {
        $.ajax({
            //请求接口
            url: `${BASE_URL}/goods/?goods_name=${goods_name}`,
            success(res) {
                //把请求后收到的res存入sessionStorage
                sessionStorage.setItem('res',JSON.stringify(res));
                //注！ res为数组，且color,standard字段为以逗号分隔的长字符串（需要分隔为数组后遍历拼接）

                console.log(res);
                let resArr = res[0];
                console.log(resArr);
                ////获取需要显示的DOM元素，把拼接内容显示
                $("#proname").html(resArr.full_name);

                $(".Product_Fecture").html(resArr.detail);
                $(".price").html(`RMB ${resArr.price}`);
                $(".standard").html(resArr.standard);
                // 颜色
                let colors = resArr.color.split(",");
                let colorstr = "";
                console.log(colors)
                $(colors).each((index, color) => {
                    colorstr += `<span class="col">${color}</span>`

                })
                $(".option").html(colorstr);
                // 切换颜色
                var pre_index = 0;
                $(".col").each((index, color) => {
                    $(color).click(function () {
                        console.log(this)
                            $(this).addClass("sel");
                            $(this).siblings().removeClass("sel");
                            pre_index = index;
                    })

                })
                
                //在详情页（detail.js）调用的时候.then()使用res中的type再次进行ajax请求把相关商品展示在详情页中的推荐产品中
                console.log(res);
                resolve(res);
            }
        })
    })
}