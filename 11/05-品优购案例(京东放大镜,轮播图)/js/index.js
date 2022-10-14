window.addEventListener('load', function() {
    // 1.获取元素
    var arrowl = document.querySelector('.arrow-l')
    var arrowr = document.querySelector('.arrow-r')
    var focus = document.querySelector('.focus')
    var focuswidth = focus.clientWidth;
    // 2.绑定事件
    // 鼠标经过按钮显示
    focus.addEventListener('mouseover', function() {
            arrowl.style.display = 'block'
            arrowr.style.display = 'block'
            clearInterval(timer);
            // 清除定时器变量
            timer = null;
        })
        // 鼠标离开，按钮隐藏
    focus.addEventListener('mouseout', function() {
            arrowl.style.display = 'none'
            arrowr.style.display = 'none'
            timer = setInterval(function() {
                // 手动调用点击事件
                arrowr.click();
            }, 2000)
        })
        // 3.动态生成小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        // 创建小li
        var li = document.createElement('li');
        // 记录当前的小圆圈的索引号，通过自定义属性来做
        li.setAttribute('data-index', i)
            // 把li插入到ol里面
        ol.appendChild(li);
        // 4.小圆圈的排他思想,我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                // 把所有的li清除类名
                ol.children[i].className = ''
            }
            this.className = 'current'
                // 5.点击小圆圈，移动图片，ul在移动
                // ul移动的距离是小圆圈的索引号*图片的宽度，注意是负值
                // 当点击了某个li,就拿到当前li的自定义属性data-index
            var dataindex = this.getAttribute('data-index')
                // 当点击li,就把li的索引号给num
            num = dataindex;
            circle = dataindex;
            animate(ul, -dataindex * focuswidth)
        })
    }
    ol.children[0].className = 'current';
    // 6.克隆第一张图片(li)放到ul最后面
    // 深拷贝
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
        // 7.点击右侧按钮，图片滚动一张
    var num = 0;
    // 控制小圆圈的播放
    var circle = 0;
    arrowr.addEventListener('click', function() {
        // 如果走到最后一张复制的图，此时ul快速复原 left改为0
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focuswidth)
            // 点击右侧按钮，小圆圈跟随变化
        circle++;
        // 如果circle=4则复原
        if (circle == ol.children.length) {
            circle = 0;
        }
        circleChange()
    });
    // 左侧按钮
    arrowl.addEventListener('click', function() {
        // 如果走到最后一张复制的图，此时ul快速复原 left改为0
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focuswidth + 'px';

        }
        num--;
        animate(ul, -num * focuswidth)
            // 点击右侧按钮，小圆圈跟随变化
        circle--;
        // 如果circle=4则复原
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange();
    })

    function circleChange() {
        // 排他思想
        // 先清除其余小圆圈的current
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    // 自动播放
    var timer = setInterval(function() {
        // 手动调用点击事件
        arrowr.click();
    }, 2000)

})