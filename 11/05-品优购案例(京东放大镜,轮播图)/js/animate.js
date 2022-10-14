function animate(obj, target, callback) {
    // console.log(callback); // callback = function(){} 调用的时候callback()
    clearInterval(obj.timer);
    // 改变步长值 (目标值-现在的位置)/10
    obj.timer = setInterval(function() {
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {

            clearInterval(obj.timer);
            // 回调函数写到计时器里面
            if (callback) {
                // 调用回调函数
                callback();
            }
        }


        obj.style.left = obj.offsetLeft + step + 'px';


    }, 15)
}