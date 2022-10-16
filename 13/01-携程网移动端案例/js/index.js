window.addEventListener('load', function() {
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    // 获得focus的宽度
    var width = focus.offsetWidth;
    // 1.利用定时器自动轮播图片
    var num = 0;
    var timer = this.setInterval(function() {
        num++;
        var translatex = -width * num;
        ul.style.transition = 'all .3s'; // 过渡效果
        ul.style.transform = 'translateX(' + translatex + 'px)';

    }, 2000);
    // 等过渡完成之后，再去判断 监听过渡完成的事件 transitionend

    ul.addEventListener('transitionend', function() {
        // 2.无缝滚动
        // 如果num走到最后一张图片 快速的跳到第一张
        if (num >= ul.children.length - 2) {
            num = 0;
            // 去掉过渡效果,让ul快速的跳到目标位置
            ul.style.transition = 'none';
            var translatex = -width * num;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (num < 0) {
            num = 2;
            ul.style.transition = 'none';
            var translatex = width * num;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        // 3.小圆点变化
        ol.querySelector('.current').classList.remove('current');
        ol.children[num].classList.add('current');

    });

    // 4.手指滑动轮播图

    // 触摸元素 touchstart: 获取手指初始坐标
    var startX = 0; // 获取手指初始坐标
    var moveX = 0; //后面会使用这个移动距离(全局变量)

    ul.addEventListener('touchstart', function(e) {
        // 获取手指初始坐标
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候停止轮播效果
        clearInterval(timer);
    });

    ul.addEventListener('touchmove', function(e) {
        // 计算手指的移动距离,手指移动之后的坐标减去手指初始的坐标
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -num * width + moveX;
        // 手指拖动的时候不需要动画效果 取消过渡
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        e.preventDefault; // 阻止屏幕滚动的默认行为
    });
    // 移动手指 touchmove: 计算手指的滑动距离,并移动盒子



})