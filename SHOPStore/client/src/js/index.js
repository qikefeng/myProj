import "../less/normalized.less";
import "../less/public.less";
import "../less/index.less";
import "../less/head.less";

import { BASE_URL } from "./lib";

$(function(){
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

