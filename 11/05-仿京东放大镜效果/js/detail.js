window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1.当鼠标经过preview_img 就显示和隐藏遮挡层和big大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {
        // (1)计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        console.log(x, y);
        // (2)盒子(300)高度的一半是150
        // (3) mask移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetWidth / 2;
        // mask.style.left = x - mask.offsetWidth / 2 + 'px';
        // mask.style.top = y - mask.offsetHeight / 2 + 'px';
        // (4)如果x坐标小于0了 就让他停在0的位置
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX < 0) {
            maskX = 0;
        } else if (maskX > maskMax) {
            maskX = maskMax;
        }
        if (maskY < 0) {
            maskY = 0;
        } else if (maskY > maskMax) {
            maskY = maskMax;
        }

        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigIMg = document.querySelector('.bigImg')
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;

        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;

        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';

    })
})