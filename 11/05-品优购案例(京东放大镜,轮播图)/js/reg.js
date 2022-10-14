window.addEventListener('load', function() {

    var regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    var regqq = /^[1-9]\d{4,}$/;
    var regnc = /^[\u4E00-\u9FA5A-Za-z0-9_]{2,8}$/
    var regmsg = /^\d{6}$/
    var regpwd = /^[\w-]{6,16}$/

    var tel = document.querySelector('#tel')
    var qq = document.querySelector('#qq')
    var nc = document.querySelector('#nc')
    var msg = document.querySelector('#msg')
    var pwd = document.querySelector('#pwd')
    var queren = document.querySelector('#queren');
    // 手机号的正则表达式
    regexp(tel, regtel)
        // qq的正则表达式
    regexp(qq, regqq)
        // 昵称的正则表达式
    regexp(nc, regnc)
        // 短信的正则表达式
    regexp(msg, regmsg)
        // 密码的正则表达式
    regexp(pwd, regpwd)
        // 表单验证的函数
    function regexp(ele, reg) {
        ele.addEventListener('blur', function() {
            if (reg.test(this.value)) {
                this.nextSibling.className = 'success'
                this.nextSibling.innerHTML = '<i class="success_icon"></i> 输入正确'
            } else {

                this.nextSibling.className = 'error'
                this.nextSibling.innerHTML = '<i class="error_icon"></i> 输入不正确，请重新输入'
            }
        })
    }

    queren.addEventListener('blur', function() {
        if (this.value == pwd.value) {
            this.nextSibling.className = 'success'
            this.nextSibling.innerHTML = '<i class="success_icon"></i> 两次密码输入一致，输入正确'
        } else {
            this.nextSibling.className = 'error'
            this.nextSibling.innerHTML = '<i class="error_icon"></i>两次密码输入不一致， 输入不正确，请重新输入'

        }
    })

})