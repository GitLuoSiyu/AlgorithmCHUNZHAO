/**
 * 事件委托意义就在于此：减少 DOM 操作，从而减少浏览器的重绘与重排次数，提升性能。
 */
```html
<ul id="ul">
    <li>0</li>
    <li>1</li>
    <li>2</li>
    ...
    <li>9999</li>
</ul>
```
window.onload = function () {
    var uli = document.getElementById("ul");
    uli.onclick = function(event) {
        alert(event.target.innerText);
    }
}
/**
事件委托的原理是，将 li 上监听的 click 事件委托到 ul 上。这里运用到了 事件冒泡 的机制，即 onclick 事件以 li -> ul -> body -> html -> document 的冒泡顺序逐步传递。

所以，我们可以选择在其中的 ul 上监听 click 事件，从而实现事件委托。

 */
