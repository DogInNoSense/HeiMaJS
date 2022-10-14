window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img')
    var mask = document.querySelector('.mask')
    var big = document.querySelector('.big')
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';

    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {
        // 计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft
        var y = e.pageY - this.offsetTop
        var maskX = x - mask.offsetWidth / 2
        var maskY = y - mask.offsetHeight / 2
        var maskmax = preview_img.offsetWidth - mask.offsetWidth
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= maskmax) {
            maskX = 200
        }
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
            maskY = 200
        }
        mask.style.left = maskX + 'px'
        mask.style.top = maskY + 'px'
        var bigimg = document.querySelector('.bigimg')
            // 大图片最大移动距离
        var bigmax = bigimg.offsetWidth - big.offsetWidth

        // 大图片的移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层的最大移动距离
        var bigX = maskX * bigmax / maskmax
        var bigY = maskY * bigmax / maskmax
        bigimg.style.left = -bigX + 'px'
        bigimg.style.top = -bigY + 'px'
    })

})