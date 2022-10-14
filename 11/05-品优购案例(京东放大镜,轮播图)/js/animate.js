 // 思路
 // 让盒子每次移动距离慢慢变小
 // 核心算法
 // （目标值-现在的位置）/10 作为每次移动的距离，即步长
 // 停止的条件
 // (target-obj.offsetLeft)/10 + 
 // 让当前盒子位置等于目标位置就停止定时器
 function animate(obj, target, callback) {
     // 每次触发事件时，先清除事件
     clearInterval(obj.timer)
     obj.timer = setInterval(function() {
         // 步长值
         var step = (target - obj.offsetLeft) / 10
         step = step > 0 ? Math.ceil(step) : Math.floor(step)
         if (obj.offsetLeft == target) {
             clearInterval(obj.timer)
             if (callback) {
                 callback()
             }
         }
         obj.style.left = obj.offsetLeft + step + 'px'
     }, 15)
 }