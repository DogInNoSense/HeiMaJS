window.addEventListener('load', function() {
    // 1.获取元素
    var cloud = this.document.querySelector('.cloud');
    var c_nav = this.document.querySelector('.c-nav');
    var lis = this.document.querySelectorAll('li');
    // 2.li绑定事件
    var current = 0;
    // 作为筋斗云的起始位置

    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(cloud, this.offsetLeft);
        })
        lis[i].addEventListener('mouseleave', function() {
            animate(cloud, current);
        })
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft;
        })
    }


})