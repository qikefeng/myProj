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
                sessionStorage.setItem('res', JSON.stringify(res));
                //注！ res为数组，且color,standard字段为以逗号分隔的长字符串（需要分隔为数组后遍历拼接）

                console.log(res);
                let resArr = res[0];

                ////获取需要显示的DOM元素，把拼接内容显示
                $("#proname").html(resArr.full_name);
                $(".type").html(`>${resArr.type}`);
                $(".proname").html(`>${resArr.name}`);
                $(".Product_Fecture").html(resArr.detail);
                $(".price").html(`RMB ${resArr.price}`);
                $(".standard").html(resArr.standard);
                $(".cpxx_tt").html(resArr.name);
                // 颜色
                let colors = resArr.color.split(",");
                let colorstr = "";

                $(colors).each((index, color) => {
                    if (index == 0) {
                        colorstr += `<span class="col sel">${color}</span>`
                    } else {
                        colorstr += `<span class="col">${color}</span>`
                    }
                })
                $(".option").html(colorstr);
                // 切换颜色
                var pre_index = 0;
                $(".col").each((index, color) => {
                    $(color).click(function () {

                        $(this).addClass("sel");
                        $(this).siblings().removeClass("sel");
                        pre_index = index;
                    })

                })

                //在详情页（detail.js）调用的时候.then()使用res中的type再次进行ajax请求把相关商品展示在详情页中的推荐产品中

                let swiperStr = "";
                for (var i = 1; i <= 6; i++) {
                    var imgurl = `${BASE_URL}/images/${resArr.name}-${i}.png`;
                    if (i == 1) {
                        swiperStr = `<li class="swiper-slide on">
                        <img src="${imgurl}">
                    </li>`;
                    } else {
                        swiperStr += `<li class="swiper-slide">
                        <img src="${imgurl}">
                    </li>`;
                    }

                }
                // 详情页轮播图
                function getStyle(el, attr) {
                    if (el.currentStyle) {
                        return el.currentStyle[attr];
                    } else {
                        return getComputedStyle(el, null)[attr];
                    }
                }
                $(".swiper-wrapper").html(swiperStr);
                let smallImgs = [...document.querySelectorAll(".gallery-thumbs .swiper-slide")];
                var flash = document.querySelector('.gallery-top .swiper-wrapper');
                let width = parseFloat(getStyle(flash, "width"));
                let index = 1; // 记录当前显示图片的下标
                let cur_offset = 0;
                let rightBtn = document.querySelector(".arrow-right");
                let leftBtn = document.querySelector(".arrow-left");
                // let last_sel_index = 0;
                smallImgs.forEach(item => {
                    item.onclick = function () {
                        index = smallImgs.indexOf(this);
                        let offset = -(index * width);
                        flash.style.transform = `translateX(${offset}px)`;
                        cur_offset = offset;
                    }
                    rightBtn.onclick = function () {
                        console.log(cur_offset, "cur========");
                        let rl_offset = cur_offset - width;
                        // console.log(rl_offset, 'of========')
                        if (cur_offset == 5 * (-width)) {
                            return
                        } else {
                            flash.style.transform = `translateX(${rl_offset}px)`;
                            cur_offset = rl_offset;
                        };

                    }
                    leftBtn.onclick = function () {
                        let rl_offset = cur_offset + width;
                        if (cur_offset == 0) {
                            return
                        } else {
                            flash.style.transform = `translateX(${rl_offset}px)`;
                            cur_offset = rl_offset;
                        };

                    }
                })
                resolve(res);

            }
        })
    })
}

export function loadingSearch(search_name) {
    return new Promise((resolve, reject) => {
        $.ajax({
            //请求接口
            url: `${BASE_URL}/goods/?search_name=${search_name}`,
            success(res) {
                console.log(res)
                //把请求后收到的res存入sessionStorage
                sessionStorage.setItem('res', JSON.stringify(res));
                //注！ res为数组，且color,standard字段为以逗号分隔的长字符串（需要分隔为数组后遍历拼接）

                console.log(res);
                let resArr = res[0];

                ////获取需要显示的DOM元素，把拼接内容显示
                $("#proname").html(resArr.full_name);
                $(".type").html(`>${resArr.type}`);
                $(".proname").html(`>${resArr.name}`);
                $(".Product_Fecture").html(resArr.detail);
                $(".price").html(`RMB ${resArr.price}`);
                $(".standard").html(resArr.standard);
                $(".cpxx_tt").html(resArr.name);
                // 颜色
                let colors = resArr.color.split(",");
                let colorstr = "";

                $(colors).each((index, color) => {
                    if (index == 0) {
                        colorstr += `<span class="col sel">${color}</span>`
                    } else {
                        colorstr += `<span class="col">${color}</span>`
                    }
                })
                $(".option").html(colorstr);
                // 切换颜色
                var pre_index = 0;
                $(".col").each((index, color) => {
                    $(color).click(function () {

                        $(this).addClass("sel");
                        $(this).siblings().removeClass("sel");
                        pre_index = index;
                    })

                })

                //在详情页（detail.js）调用的时候.then()使用res中的type再次进行ajax请求把相关商品展示在详情页中的推荐产品中

                let swiperStr = "";
                for (var i = 1; i <= 6; i++) {
                    var imgurl = `${BASE_URL}/images/${resArr.name}-${i}.png`;
                    if (i == 1) {
                        swiperStr = `<li class="swiper-slide on">
                        <img src="${imgurl}">
                    </li>`;
                    } else {
                        swiperStr += `<li class="swiper-slide">
                        <img src="${imgurl}">
                    </li>`;
                    }

                }
                // 详情页轮播图
                function getStyle(el, attr) {
                    if (el.currentStyle) {
                        return el.currentStyle[attr];
                    } else {
                        return getComputedStyle(el, null)[attr];
                    }
                }
                $(".swiper-wrapper").html(swiperStr);
                let smallImgs = [...document.querySelectorAll(".gallery-thumbs .swiper-slide")];
                var flash = document.querySelector('.gallery-top .swiper-wrapper');
                let width = parseFloat(getStyle(flash, "width"));
                let index = 1; // 记录当前显示图片的下标
                let cur_offset = 0;
                let rightBtn = document.querySelector(".arrow-right");
                let leftBtn = document.querySelector(".arrow-left");
                // let last_sel_index = 0;
                smallImgs.forEach(item => {
                    item.onclick = function () {
                        index = smallImgs.indexOf(this);
                        let offset = -(index * width);
                        flash.style.transform = `translateX(${offset}px)`;
                        cur_offset = offset;
                    }
                    rightBtn.onclick = function () {
                        console.log(cur_offset, "cur========");
                        let rl_offset = cur_offset - width;
                        // console.log(rl_offset, 'of========')
                        if (cur_offset == 5 * (-width)) {
                            return
                        } else {
                            flash.style.transform = `translateX(${rl_offset}px)`;
                            cur_offset = rl_offset;
                        };

                    }
                    leftBtn.onclick = function () {
                        let rl_offset = cur_offset + width;
                        if (cur_offset == 0) {
                            return
                        } else {
                            flash.style.transform = `translateX(${rl_offset}px)`;
                            cur_offset = rl_offset;
                        };

                    }
                })
                resolve(res);

            }
        })
    })
}