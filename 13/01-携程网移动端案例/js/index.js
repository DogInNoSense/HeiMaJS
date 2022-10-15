window.addEventListener('load', function() {
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    // 获得focus的宽度
    var width = focus.offsetWidth;
    // 利用定时器自动轮播图片
    var num = 0;
    var timer = this.setInterval(function() {
        num++;
        var translatex = -width * num;
        ul.style.transition = 'all .3s'; // 过渡效果
        ul.style.transform = 'translateX(' + translatex + 'px)';

    }, 2000);
    // 等过渡完成之后，再去判断 监听过渡完成的事件 transitionend

    ul.addEventListener('transitionend', function() {
        // 无缝滚动
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

        // 小圆点变化
        ol.querySelector('.current').classList.remove('current');
        ol.children[num].classList.add('current');

    });

})