/*! 版权所有pepper */
webpackHotUpdate("detail",{

/***/ "./src/js/loading.js":
/*!***************************!*\
  !*** ./src/js/loading.js ***!
  \***************************/
/*! exports provided: loadingDetail, loadingSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadingDetail\", function() { return loadingDetail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadingSearch\", function() { return loadingSearch; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./src/js/lib.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n //详情页---加载请求商品信息\n\nfunction loadingDetail(goods_name) {\n  console.log(\"\".concat(_lib__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"], \"/goods/?goods_name=\").concat(goods_name));\n  return new Promise(function (resolve, reject) {\n    $.ajax({\n      //请求接口\n      url: \"\".concat(_lib__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"], \"/goods/?goods_name=\").concat(goods_name),\n      success: function success(res) {\n        //把请求后收到的res存入sessionStorage\n        sessionStorage.setItem('res', JSON.stringify(res)); //注！ res为数组，且color,standard字段为以逗号分隔的长字符串（需要分隔为数组后遍历拼接）\n\n        console.log(res);\n        var resArr = res[0]; ////获取需要显示的DOM元素，把拼接内容显示\n\n        $(\"#proname\").html(resArr.full_name);\n        $(\".type\").html(\">\".concat(resArr.type));\n        $(\".proname\").html(\">\".concat(resArr.name));\n        $(\".Product_Fecture\").html(resArr.detail);\n        $(\".price\").html(\"RMB \".concat(resArr.price));\n        $(\".standard\").html(resArr.standard);\n        $(\".cpxx_tt\").html(resArr.name); // 颜色\n\n        var colors = resArr.color.split(\",\");\n        var colorstr = \"\";\n        $(colors).each(function (index, color) {\n          if (index == 0) {\n            colorstr += \"<span class=\\\"col sel\\\">\".concat(color, \"</span>\");\n          } else {\n            colorstr += \"<span class=\\\"col\\\">\".concat(color, \"</span>\");\n          }\n        });\n        $(\".option\").html(colorstr); // 切换颜色\n\n        var pre_index = 0;\n        $(\".col\").each(function (index, color) {\n          $(color).click(function () {\n            $(this).addClass(\"sel\");\n            $(this).siblings().removeClass(\"sel\");\n            pre_index = index;\n          });\n        }); //在详情页（detail.js）调用的时候.then()使用res中的type再次进行ajax请求把相关商品展示在详情页中的推荐产品中\n\n        var swiperStr = \"\";\n\n        for (var i = 1; i <= 6; i++) {\n          var imgurl = \"\".concat(_lib__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"], \"/images/\").concat(resArr.name, \"-\").concat(i, \".png\");\n\n          if (i == 1) {\n            swiperStr = \"<li class=\\\"swiper-slide on\\\">\\n                        <img src=\\\"\".concat(imgurl, \"\\\">\\n                    </li>\");\n          } else {\n            swiperStr += \"<li class=\\\"swiper-slide\\\">\\n                        <img src=\\\"\".concat(imgurl, \"\\\">\\n                    </li>\");\n          }\n        } // 详情页轮播图\n\n\n        function getStyle(el, attr) {\n          if (el.currentStyle) {\n            return el.currentStyle[attr];\n          } else {\n            return getComputedStyle(el, null)[attr];\n          }\n        }\n\n        $(\".swiper-wrapper\").html(swiperStr);\n\n        var smallImgs = _toConsumableArray(document.querySelectorAll(\".gallery-thumbs .swiper-slide\"));\n\n        var flash = document.querySelector('.gallery-top .swiper-wrapper');\n        var width = parseFloat(getStyle(flash, \"width\"));\n        var index = 1; // 记录当前显示图片的下标\n\n        var cur_offset = 0;\n        var rightBtn = document.querySelector(\".arrow-right\");\n        var leftBtn = document.querySelector(\".arrow-left\"); // let last_sel_index = 0;\n\n        smallImgs.forEach(function (item) {\n          item.onclick = function () {\n            index = smallImgs.indexOf(this);\n            var offset = -(index * width);\n            flash.style.transform = \"translateX(\".concat(offset, \"px)\");\n            cur_offset = offset;\n          };\n\n          rightBtn.onclick = function () {\n            console.log(cur_offset, \"cur========\");\n            var rl_offset = cur_offset - width; // console.log(rl_offset, 'of========')\n\n            if (cur_offset == 5 * -width) {\n              return;\n            } else {\n              flash.style.transform = \"translateX(\".concat(rl_offset, \"px)\");\n              cur_offset = rl_offset;\n            }\n\n            ;\n          };\n\n          leftBtn.onclick = function () {\n            var rl_offset = cur_offset + width;\n\n            if (cur_offset == 0) {\n              return;\n            } else {\n              flash.style.transform = \"translateX(\".concat(rl_offset, \"px)\");\n              cur_offset = rl_offset;\n            }\n\n            ;\n          };\n        });\n        resolve(res);\n      }\n    });\n  });\n}\nfunction loadingSearch(search_name) {\n  return new Promise(function (resolve, reject) {\n    $.ajax({\n      //请求接口\n      url: \"\".concat(_lib__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"], \"/goods/?search_name=\").concat(search_name),\n      success: function success(res) {\n        console.log(res); //把请求后收到的res存入sessionStorage\n\n        sessionStorage.setItem('res', JSON.stringify(res)); //注！ res为数组，且color,standard字段为以逗号分隔的长字符串（需要分隔为数组后遍历拼接）\n\n        console.log(res);\n        var resArr = res[0]; ////获取需要显示的DOM元素，把拼接内容显示\n\n        $(\"#proname\").html(resArr.full_name);\n        $(\".type\").html(\">\".concat(resArr.type));\n        $(\".proname\").html(\">\".concat(resArr.name));\n        $(\".Product_Fecture\").html(resArr.detail);\n        $(\".price\").html(\"RMB \".concat(resArr.price));\n        $(\".standard\").html(resArr.standard);\n        $(\".cpxx_tt\").html(resArr.name); // 颜色\n\n        var colors = resArr.color.split(\",\");\n        var colorstr = \"\";\n        $(colors).each(function (index, color) {\n          if (index == 0) {\n            colorstr += \"<span class=\\\"col sel\\\">\".concat(color, \"</span>\");\n          } else {\n            colorstr += \"<span class=\\\"col\\\">\".concat(color, \"</span>\");\n          }\n        });\n        $(\".option\").html(colorstr); // 切换颜色\n\n        var pre_index = 0;\n        $(\".col\").each(function (index, color) {\n          $(color).click(function () {\n            $(this).addClass(\"sel\");\n            $(this).siblings().removeClass(\"sel\");\n            pre_index = index;\n          });\n        }); //在详情页（detail.js）调用的时候.then()使用res中的type再次进行ajax请求把相关商品展示在详情页中的推荐产品中\n\n        var swiperStr = \"\";\n\n        for (var i = 1; i <= 6; i++) {\n          var imgurl = \"\".concat(_lib__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"], \"/images/\").concat(resArr.name, \"-\").concat(i, \".png\");\n\n          if (i == 1) {\n            swiperStr = \"<li class=\\\"swiper-slide on\\\">\\n                        <img src=\\\"\".concat(imgurl, \"\\\">\\n                    </li>\");\n          } else {\n            swiperStr += \"<li class=\\\"swiper-slide\\\">\\n                        <img src=\\\"\".concat(imgurl, \"\\\">\\n                    </li>\");\n          }\n        } // 详情页轮播图\n\n\n        function getStyle(el, attr) {\n          if (el.currentStyle) {\n            return el.currentStyle[attr];\n          } else {\n            return getComputedStyle(el, null)[attr];\n          }\n        }\n\n        $(\".swiper-wrapper\").html(swiperStr);\n\n        var smallImgs = _toConsumableArray(document.querySelectorAll(\".gallery-thumbs .swiper-slide\"));\n\n        var flash = document.querySelector('.gallery-top .swiper-wrapper');\n        var width = parseFloat(getStyle(flash, \"width\"));\n        var index = 1; // 记录当前显示图片的下标\n\n        var cur_offset = 0;\n        var rightBtn = document.querySelector(\".arrow-right\");\n        var leftBtn = document.querySelector(\".arrow-left\"); // let last_sel_index = 0;\n\n        smallImgs.forEach(function (item) {\n          item.onclick = function () {\n            index = smallImgs.indexOf(this);\n            var offset = -(index * width);\n            flash.style.transform = \"translateX(\".concat(offset, \"px)\");\n            cur_offset = offset;\n          };\n\n          rightBtn.onclick = function () {\n            console.log(cur_offset, \"cur========\");\n            var rl_offset = cur_offset - width; // console.log(rl_offset, 'of========')\n\n            if (cur_offset == 5 * -width) {\n              return;\n            } else {\n              flash.style.transform = \"translateX(\".concat(rl_offset, \"px)\");\n              cur_offset = rl_offset;\n            }\n\n            ;\n          };\n\n          leftBtn.onclick = function () {\n            var rl_offset = cur_offset + width;\n\n            if (cur_offset == 0) {\n              return;\n            } else {\n              flash.style.transform = \"translateX(\".concat(rl_offset, \"px)\");\n              cur_offset = rl_offset;\n            }\n\n            ;\n          };\n        });\n        resolve(res);\n      }\n    });\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/loading.js?");

/***/ })

})