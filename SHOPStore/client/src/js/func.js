import { BASE_URL } from "./lib";
export function checklogin() {
    var lg = document.querySelector('.headright .login-btn');
    var rg = document.querySelector('.headright .register-btn');
    var lguser = document.querySelector('.headright .user');
    var usr = document.querySelector('.headright .usr');
    if (sessionStorage.LOGIN_USER) {
        lg.style.display = 'none';
        rg.style.display = 'none';
        lguser.style.display = 'inline-block';
        usr.innerHTML = ('用户：' + JSON.parse(sessionStorage.LOGIN_USER).username);
    } else {
        lguser.style.display = 'none';
        lg.style.display = 'inline-block';
        rg.style.display = 'inline-block';
    }
}

export function login_and_register() {
    //登录注册显示隐藏
    $(".headlogo").html(`<img src="${BASE_URL}/images/sony-logo.jpg">`);
    $(".searchbox b").on("click", function(){
        location.href = "../../dist/static/pages/search.html";
    });
    $(".login-btn").on("click", function () {
        $(".login").css("display", "block")
    });
    $(".cha").on("click", function () {
        $(".login").css("display", "none");
        $(".register").css("display", "none")
    });
    $(".register-btn").on("click", function () {
        $(".register").css("display", "block")
    })
    //点击登录/注册上面的两个互相切换
    $(".login-but").on("click", function () {
        $(".login").css("display", "block");
        $(".register").css("display", "none")
    })
    $(".register-but").on("click", function () {
        $(".register").css("display", "block");
        $(".login").css("display", "none")

    }) 

    function exituser() {
        var lguser = document.querySelector('.headright .user');
        lguser.onclick = function () {
            delete sessionStorage.LOGIN_USER;
            checklogin();
            window.location.reload();
        }
    }
    exituser()
}

export function user_login() {
    let inputs = [...document.querySelectorAll(".register input")];
    let ipt_true = [false, false, false, false];
    inputs.forEach(input => {
        input.oninput = function () {
            // 判断是否合法
            let index = inputs.indexOf(input);
            let reg = new RegExp(this.dataset.reg);
            if (index == 3) {
                if (inputs[3].value == inputs[2].value) {
                    inputs[3].parentElement.classList.remove("err");
                    ipt_true[index] = true;
                } else {
                    inputs[3].parentElement.classList.add("err");
                    ipt_true[index] = false;
                }
            } else {
                if (reg.test(this.value)) {
                    // 合法
                    this.parentElement.classList.remove("err");
                    ipt_true[index] = true;
                } else {
                    // 不合法
                    this.parentElement.classList.add("err");
                    ipt_true[index] = false;
                }
            }
        }
    });
    let registerBtn = document.querySelector('#registerBtn');
    let loginBtn = document.querySelector('#loginBtn');
    let login_username = document.querySelector('#login_username');
    let login_password = document.querySelector('#login_password');
    var phonenumber = document.querySelector('#phonenumber');
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var passwordagin = document.querySelector('#pwdagin');
    var headlogin = document.querySelector(".login");
    var headlregister = document.querySelector(".register");
    let checkbox = document.querySelector("[type=checkbox]");
    if(localStorage.LOC_USER) {
        let user_session = JSON.parse(localStorage.LOC_USER);
        login_username.value = user_session.username;
        login_password.value = user_session.password;
        checkbox.checked = true;
    }
    loginBtn.onclick = function () {
        let user = {
            username: login_username.value,
            password: login_password.value
        };
        if (!user.username || !user.password) {
            console.log(login_username, "========")
            alert("请输入账号或密码！");
            return;
        }
        fetch("http://127.0.0.1:8081/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(data => {
                switch (data.status) {
                    case "200": {
                        alert(`${user.username} 欢迎回来`);
                        if (checkbox.checked) {
                            localStorage.LOC_USER = JSON.stringify(user);
                        } else {
                            localStorage.removeItem("LOC_USER");
                        }
                        sessionStorage.LOGIN_USER = JSON.stringify(data.user);
                        // window.history.back();
                        headlogin.style = "display: none";
                        headlregister.style = "display: none";
                        checklogin();
                    }
                    break;
                case "202": {
                    alert("用户或密码错误");
                }
                break;
                }
            })
    }
    registerBtn.onclick = function () {
        var username = phonenumber.value;
        var emailvalue = email.value;
        var pwd = password.value;
        var pwdagin = passwordagin.value;

        if (!username || !emailvalue || !pwd || !pwdagin) {
            alert("请完善信息！");
            return;
        } else {
            for (let i of ipt_true) {
                if (i == false) {
                    alert('输入有误请重新输入')
                    return
                }
            };
            var user = {
                'username': username,
                'email': emailvalue,
                'password': pwd,
            };
            fetch("http://127.0.0.1:8081/user/register", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status == "201") {
                        alert("用户已存在！");
                    } else if (data.status == "200") {
                        alert("注册成功！");
                        sessionStorage.LOGIN_USER = JSON.stringify(user);
                        location.href = "../index.html";
                    }
                });
        }

    }

}

export function totop() {
    var topbtn = document.querySelector('#head .totop');
    var isAnimtaing = false;
    var interval = 15;
    var offset = 0;

    window.addEventListener("scroll", function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
    }, true);

    topbtn.onclick = function () {
        if (isAnimtaing) {
            return;
        }

        var t = setInterval(function () {
            if (offset > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = offset - (Math.ceil(offset / (200 / interval)))
            } else {
                clearInterval(t);
                isAnimtaing = false;
            }
        }, interval)
    }



}