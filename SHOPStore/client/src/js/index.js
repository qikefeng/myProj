import "../less/normalized.less";
import "../less/public.less";
import "../less/index.less";
import "../less/head.less";
import "../less/footer.less";

import { BASE_URL } from "./lib";

import { user_login, login_and_register, checklogin } from "../js/register";

$(function(){
   checklogin()
    $(".headlogo").html(`<img src="${BASE_URL}/images/sony-logo.jpg" >`);

    // 遍历数组添加img标签
   var obj = $( ".gr4 .gri" );
   var arr = $.makeArray( obj );
   $(arr).each((index, itm) => {
      var a = index+1;
      $(`<img src="${BASE_URL}/images/yyyl${a}.jpg" height="100%" width="100%">`).appendTo($(itm));
   });

   var Club = $( ".gr5 .gri" );
   var ClubArr = $.makeArray( Club );
   $(ClubArr).each((index, itm) => {
      var Club_i = index+1;
      $(`<img src="${BASE_URL}/images/Club${Club_i}.jpg" height="100%" width="100%">`).appendTo($(itm));
   });
   
   // 两张图片切换的地方
   var lhqh = $(".content-end-list1 li");
   var lhqharr = $.makeArray(lhqh);
   $(lhqharr).each((index, itm) => {
      var qhxb = index+1;
      $(`<img src="${BASE_URL}/images/s${qhxb}h.jpg"  class="img1">`).appendTo($(itm));
      $(`<img src="${BASE_URL}/images/s${qhxb}l.jpg"  class="img2">`).appendTo($(itm));
   });


   login_and_register()
   user_login()

   //登录注册显示隐藏
   $(".login-btn").on("click",function(){
      $(".login").css("display","block")
   });
   $(".cha").on("click",function(){
      $(".login").css("display","none");
      $(".register").css("display","none")
   });
   $(".register-btn").on("click",function(){
      $(".register").css("display","block")
   })
   //点击登录/注册上面的两个互相切换
   $(".login-but").on("click",function(){
      $(".login").css("display","block");
      $(".register").css("display","none")
   })
   $(".register-but").on("click",function(){
      $(".register").css("display","block");
      $(".login").css("display","none")
 
   })
   
})


rollimg();
function rollimg() {
   var prevBtn = document.querySelector('.scroll .prev');
   var nextBtn = document.querySelector('.scroll .next');
   var paginationItems = [...document.querySelectorAll(".scroll .pagination-item")];
   var wrapper = document.querySelector('.scroll .wrapper');
   var flash = document.querySelector('.scroll .flash');
   var width = parseInt(getStyle(flash, "width"));
   var length = paginationItems.length; // 获取图片显示的张数（实际显示）
   var curIndex = 1;// 记录当前显示图片的下标
   var lastSelIndex = 1; // 记录上一次显示图片的下标，便于后面移除
   var isAnimating = false; // 记录当前是否正在做一个滚动效果
   var timer = null; // 定时器
   // 2. 更新位置
   wrapper.style.transform = `translateX(-${width}px)`;
   // 3. 自动播放
   play();
   // 4. 事件监听
   flash.onmouseenter = stop;
   flash.onmouseleave = play;
   window.onresize = function () {
       width = parseInt(getStyle(flash, "width"));
   }
   nextBtn.onclick = function () {
       if (isAnimating) return;
       curIndex = curIndex == length ? 1 : ++curIndex;
       tab(-width);
       updatePagination();
   }
   prevBtn.onclick = function () {
       if (isAnimating) return;
       curIndex = curIndex == 1 ? length : --curIndex;
       tab(width);
       updatePagination();
   }
   paginationItems.forEach(pagination => {
       pagination.onclick = function () {
           let index = paginationItems.indexOf(this) + 1;
           if (index == curIndex || isAnimating) return;
           let offset = -width * (index - curIndex);
           curIndex = index;
           tab(offset);
           updatePagination();
       }
   });
   // 5. 函数    
   function play() {
       timer = setInterval(() => {
           nextBtn.onclick();
       }, 2000);
   }

   function stop() {
       clearInterval(timer);
   }

   function tab(offset) {
       // 计算目标偏移  
       let desOffset = lastSelIndex * -width + offset;
       let curOffset = lastSelIndex * -width;
       // 帧动画
       let duration = 500;
       let interval = 15;
       let speed = Math.ceil(offset / (duration / interval));
       isAnimating = true;
       let t = setInterval(() => {
           // 左滑 (offset < 0 && curOffset > desOffset)
           // 右滑 (offset > 0 && curOffset < desOffset)
           if ((offset < 0 && curOffset > desOffset) || (offset > 0 && curOffset < desOffset)) {
               curOffset += speed;
               wrapper.style.transform = `translateX(${curOffset}px)`;
           } else {
               isAnimating = false;
               clearInterval(t);
               // 矫正误差
               wrapper.style.transform = `translateX(${curIndex * -width}px)`;
               // 边界值处理
               if (desOffset > -width) {
                   wrapper.style.transform = `translateX(${-length * width}px)`;
               } else if (desOffset < -length * width) {
                   wrapper.style.transform = `translateX(${-width}px)`;
               }
           }
       }, interval);
   }

   function updatePagination() {
       paginationItems[lastSelIndex - 1].classList.remove("sel");
       paginationItems[curIndex - 1].classList.add("sel");
       lastSelIndex = curIndex;
   }

   function getStyle(el, attr) {
       if (el.currentStyle) {
           return el.currentStyle[attr];
       } else {
           return getComputedStyle(el, null)[attr];
       }
   }
}



//第二个图片轮播
rollim();
function rollim() {
   var prevBtn = document.querySelector('.scroll2 .prev2');
   var nextBtn = document.querySelector('.scroll2 .next2');
   var paginationItems = [...document.querySelectorAll(".scroll2 .pagination-item2")];
   var wrapper = document.querySelector('.scroll2 .wrapper2');
   var flash = document.querySelector('.scroll2 .flash2');
   var width = parseInt(getStyle(flash, "width"));
   var length = paginationItems.length; // 获取图片显示的张数（实际显示）
   var curIndex = 1;// 记录当前显示图片的下标
   var lastSelIndex = 1; // 记录上一次显示图片的下标，便于后面移除
   var isAnimating = false; // 记录当前是否正在做一个滚动效果
   var timer = null; // 定时器
   // 2. 更新位置
   wrapper.style.transform = `translateX(-${width}px)`;
   // 3. 自动播放
   play();
   // 4. 事件监听
   flash.onmouseenter = stop;
   flash.onmouseleave = play;
   window.onresize = function () {
       width = parseInt(getStyle(flash, "width"));
   }
   nextBtn.onclick = function () {
       if (isAnimating) return;
       curIndex = curIndex == length ? 1 : ++curIndex;
       tab(-width);
       updatePagination();
   }
   prevBtn.onclick = function () {
       if (isAnimating) return;
       curIndex = curIndex == 1 ? length : --curIndex;
       tab(width);
       updatePagination();
   }
   paginationItems.forEach(pagination => {
       pagination.onclick = function () {
           let index = paginationItems.indexOf(this) + 1;
           if (index == curIndex || isAnimating) return;
           let offset = -width * (index - curIndex);
           curIndex = index;
           tab(offset);
           updatePagination();
       }
   });
   // 5. 函数    
   function play() {
       timer = setInterval(() => {
           nextBtn.onclick();
       }, 2000);
   }

   function stop() {
       clearInterval(timer);
   }

   function tab(offset) {
       // 计算目标偏移  
       let desOffset = lastSelIndex * -width + offset;
       let curOffset = lastSelIndex * -width;
       // 帧动画
       let duration = 500;
       let interval = 15;
       let speed = Math.ceil(offset / (duration / interval));
       isAnimating = true;
       let t = setInterval(() => {
           // 左滑 (offset < 0 && curOffset > desOffset)
           // 右滑 (offset > 0 && curOffset < desOffset)
           if ((offset < 0 && curOffset > desOffset) || (offset > 0 && curOffset < desOffset)) {
               curOffset += speed;
               wrapper.style.transform = `translateX(${curOffset}px)`;
           } else {
               isAnimating = false;
               clearInterval(t);
               // 矫正误差
               wrapper.style.transform = `translateX(${curIndex * -width}px)`;
               // 边界值处理
               if (desOffset > -width) {
                   wrapper.style.transform = `translateX(${-length * width}px)`;
               } else if (desOffset < -length * width) {
                   wrapper.style.transform = `translateX(${-width}px)`;
               }
           }
       }, interval);
   }

   function updatePagination() {
       paginationItems[lastSelIndex - 1].classList.remove("sel2");
       paginationItems[curIndex - 1].classList.add("sel2");
       lastSelIndex = curIndex;
   }

   function getStyle(el, attr) {
       if (el.currentStyle) {
           return el.currentStyle[attr];
       } else {
           return getComputedStyle(el, null)[attr];
       }
   }
}

