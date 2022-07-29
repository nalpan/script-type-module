# 他の `type="module` の中身は参照できない

```html
<script src="./module-draw.js" type="module"></script>
<script src="./module-main.js" type="module"></script>
```

module-circle-draw.js
```js
/**
 * 指定されたセレクタに円を描く
 * @param {string} selector
 */
function draw (selector) {
  const canvas = document.querySelector(selector)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
  ctx.stroke()
}
```

module-main.js
```js
function main () {
  draw('#canvas') // Uncaught ReferenceError: draw is not defined
}

main()
```
