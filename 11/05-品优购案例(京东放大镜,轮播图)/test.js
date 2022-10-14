window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var arrowl = document.querySelector('.arrow-l')
    var arrowr = document.querySelector('.arrow-r')
    var ul = focus.querySelector('ul')
    var ol = document.querySelector('.circle')
        // 鼠标经过,按钮显示
    focus.addEventListener('mouseenter', function() {
            arrowr.style.display = 'block';
            arrowl.style.display = 'block';
        })
        // 鼠标离开,按钮隐藏
    focus.addEventListener('mouseleave', function() {
            arrowr.style.display = 'none';
            arrowl.style.display = 'none';
        })
        // 遍历图片,让小圆点与图片数一致
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        ol.appendChild(li)
            // 添加自定义属性data-index
        li.setAttribute('data-index', i)

        // 小圆点排他变色
        ol.children[i].addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            this.className = 'current'
                // 点击小圆圈开始滚动
            var index = this.getAttribute('data-index')
            num = index
            circle = index
            animate(ul, -index * focus.clientWidth)
        })
        ol.children[0].className = 'current';
    }
    var num = 0
        // 控制按钮的播放
    var circle = 0
    var li = ul.children[0].cloneNode(true)
    ul.appendChild(li)
    arrowr.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++
        animate(ul, -num * focus.clientWidth)
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ul.children.
        ol.children[circle].className = 'current'
    });
    arrowl.addEventListener('click', function() {
        if (num == 0) {
            ul.style.left = (ul.children.length - 1) * force.clientWidth;
            num = ul.children.length - 1;
        }
        // num类似于index，作为下标
        num--
        animate(ul, -num * focus.clientWidth)
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[circle].className = 'current'
    });
})