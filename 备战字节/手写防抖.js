// debounce
function debounce(fn, delay = 500) {
    // timer 写在闭包中，因此防抖也是闭包的一个应用
    let timer = null;

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay)
    }
}

// 验证
input1.addEventListener('keyup', debounce(() => {
    console.log(input1.value);
}), 600)