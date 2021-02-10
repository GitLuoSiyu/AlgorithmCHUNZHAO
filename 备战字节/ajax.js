function ajax_post(url, data) {
    // 1. 异步对象 ajax
    var ajax = new XMLHttpRequest();

    // 2. url 方法
    ajax.open('post', url);

    // 3. 设置请求报文
    ajax.setRequestHeader('Content-type', 'text/plain');

    // 4. 发送
    if (data) {
        ajax.send(data);
    } else {
        ajax.send();
    }

    // 5. 注册事件
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            console.log(ajax.respenseText);
        }
    }
}