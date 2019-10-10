import "../less/normalized.less";
import "../less/public.less";
import "../less/search.less";
import "../less/head.less";
import "../less/footer.less";
import { BASE_URL } from "./lib";
import { user_login, login_and_register, checklogin, totop } from "../js/func";

$(function(){
    user_login()
    login_and_register()
    checklogin()
    totop()
    // $(".headlogo").html(`<img src="${BASE_URL}/images/sony-logo.jpg" >`);
})