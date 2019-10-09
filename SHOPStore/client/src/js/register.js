function user_login() {
    inputs.forEach(input => {
        input.oninput = function () {
            // 判断是否合法
            index = inputs.indexOf(input);
            let reg = new RegExp(this.dataset.reg);
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
    });
}